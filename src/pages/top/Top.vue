<template>
  <v-app>
    <!-- 背景全面を灰色にするためのcard -->
    <v-card color="blue-grey lighten-5" width="100%" height="100%" flat>
    <!-- コンテンツとフッターのラッパー（サイズ調整用） -->
    <v-content class="mx-0 my-5 px-0 py-4">
      <v-container class="ma-0 pa-0">
        <v-row class="ma-0 pa-0" justify="center">
          <v-col cols="12" sm="10" md="10" lg="8" xl="6" class="mb-5 mx-0 pa-0">
            <!-- 以下コンテンツ(背景白部分の全体) -->
            <v-card tile class="pa-5" width="100%" height="100%" flat>
                <!-- ヘッダー -->
                <p class="font-weight-medium mb-0">空き家のリノベーション</p>
                <v-divider></v-divider>
                <v-app-bar color="white" flat class="my-5">
                    <v-toolbar-title>【ロゴマーク】</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn text>
                            <div>
                                <v-icon class="mb-3">mdi-pencil</v-icon>
                                <v-spacer></v-spacer>
                                プロジェクト
                            </div>
                        </v-btn>
                        <v-btn text>
                            <div>
                                <v-icon class="mb-3">mdi-bullhorn</v-icon>
                                <v-spacer></v-spacer>
                                ニュース
                            </div>
                        </v-btn>
                        <v-btn text>
                            <div>
                                <v-icon class="mb-3">mdi-email</v-icon>
                                <v-spacer></v-spacer>
                                コンタクト
                            </div>
                        </v-btn>
                    </v-toolbar-items>
                </v-app-bar>

                <!-- 画像スライド -->
                <v-carousel>
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                ></v-carousel-item>
                </v-carousel>
            </v-card>
  
            
      
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      language: null,
    //↓ スライドに表示させる画像のパス
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }),
  }
</script>