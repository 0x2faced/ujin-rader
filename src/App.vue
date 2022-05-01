<script setup lang="ts">
import rarity from '../data/rarity.json'
import { ref, computed } from 'vue'

const orderBy = ref('name_asc')

const originAssets = rarity
  .map(({ properties, ...asset }) => {
    let rarity = 1
    for (const property of properties) {
      rarity *= property.count / property.total
    }
    return {
      ...asset,
      properties: properties.sort((a, b) => a.type.localeCompare(b.type)),
      rarity,
    }
  })
  .sort((a, b) => a.rarity - b.rarity)
  .map((asset, assetIndex) => {
    return {
      ...asset,
      rank: assetIndex + 1,
    }
  })

for (const [assetIndex, asset] of originAssets.entries()) {
  if (assetIndex > 0) {
    const prevAsset = originAssets[assetIndex - 1]
    if (prevAsset.rarity === asset.rarity) {
      asset.rank = prevAsset.rank
    }
  }
}

const assets = computed(() => {
  if (orderBy.value === 'name_asc') {
    return originAssets.sort((a, b) => a.name.localeCompare(b.name))
  } else if (orderBy.value === 'name_desc') {
    return originAssets.sort((a, b) => b.name.localeCompare(a.name))
  } else if (orderBy.value === 'rank_asc') {
    return originAssets.sort((a, b) => a.rank - b.rank)
  } else if (orderBy.value === 'rank_desc') {
    return originAssets.sort((a, b) => b.rank - a.rank)
  }
  return originAssets
})

function formatRate(n: number) {
  return `${(n * 100).toFixed(2)}%`
}
</script>

<template>
  <div class="py-4">
    <div class="container mx-auto font-roboto space-y-2 px-2">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-press">UJIN<span class="text-purple-400 pl-2">RADER</span></h2>
        <div>
          <select v-model="orderBy" class="border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-600">
            <option value="name_asc">Name</option>
            <option value="name_desc">Recently Created</option>
            <option value="rank_asc">Rank: Low to High</option>
            <option value="rank_desc">Rank: High to Low</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-2 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 auto-cols-fr gap-x-4 gap-y-6">
        <template v-for="asset in assets" :key="asset.id">
          <a target="_blank" :href="`https://opensea.io/assets/${asset.contractAddress}/${asset.tokenId}`">
            <div class="rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div class="overflow-hidden aspect-square">
                <img :src="`../data/${asset.imageFile}`" class="block object-cover w-full h-full" />
              </div>
              <div class="px-4 pt-2 pb-4 dark:bg-gray-900">
                <div class="flex justify-between items-center">
                  <div class="text-purple-400 font-extrabold">Rank{{ asset.rank }}</div>
                  <div class="font-extrabold">{{ asset.name }}</div>
                </div>
                <div>
                  <div class="space-y-1">
                    <template v-for="property in asset.properties" :key="property.type">
                      <div>
                        <div class="text-xs text-gray-400">{{ property.type }}</div>
                        <div class="flex justify-between items-center">
                          <div class="text-sm">{{ property.value }}</div>
                          <div class="text-xs">{{ formatRate(property.count / property.total) }}</div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>
