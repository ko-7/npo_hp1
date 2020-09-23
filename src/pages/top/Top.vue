<template>
  <v-app>
    <!-- コンテンツとフッターのラッパー（サイズ調整用） -->
    <v-content>
      <v-container>
        <v-row class="ma-0 pa-0" justify="center">
          <v-col cols="12" sm="10" md="10" lg="8" xl="6" class="mb-5 mx-0 pa-0">
            <!-- ヘッダー -->
            <p class="font-weight-medium mb-0">いわたタウンマネジメント</p>
            <v-divider color="#BDBDBD" />
            <v-app-bar color="white" flat class="my-3">
                <v-toolbar-title>
                  <v-card class="my-1" width="100%" tile flat href="/">
                    <v-img src="@/assets/logo.jpg" />
                  </v-card>
                </v-toolbar-title>
                <v-spacer />
                <!-- <v-toolbar-items>
                    <v-btn text class="px-3 text-caption" href="/">
                        <div align="center">
                            <v-icon class="mb-1" style="color:#FFD700;">mdi-home</v-icon>
                            <v-spacer></v-spacer>
                            <p class="mb-0">TOP</p>
                        </div>
                    </v-btn>
                </v-toolbar-items> -->
            </v-app-bar>

            <!-- 画像スライド -->
            <div>
              <v-card tile>
                <v-responsive :aspect-ratio="16/9">
                  <v-carousel continuous cycle width="100%" height="100%" hide-delimiter-background :show-arrows="false">
                    <v-carousel-item
                      v-for="(item,i) in items"
                      :key="i"
                      :src="item.src"
                    />
                  </v-carousel>
                </v-responsive>
              </v-card>
            </div>

            <!-- 組織紹介 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <p class="my-1" v-show="ContentVshow[10]">{{ Contents[10].name }}</p>
              <v-divider color="#BDBDBD" class="mb-3" />
              <!-- <h4 class="mb-1"></h4> -->
              <p class="mb-0">{{ Contents[11].name }}</p>
            </v-card>
            <!-- 活動内容紹介 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <p class="my-1">{{ Contents[20].name }}</p>
              <v-divider color="#BDBDBD" class="mb-3" />
              <p>{{ Contents[21].name }}</p>
            </v-card>
                
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <p class="my-1">{{ Contents[30].name }}</p>
              <v-divider color="#BDBDBD" class="mb-3" />
              <h4 class="mb-1">{{ Contents[31].name }}</h4>
              <p>{{ Contents[32].name }}</p>
            </v-card>

            <!-- 定款・事業報告書 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <p class="my-1">{{ Contents[40].name }}</p>
              <v-divider color="#BDBDBD" class="mb-3" />
              <p class="mb-0">
                <a :href="Contents[42].name" target="_blank">
                  {{ Contents[41].name }}
                </a>
              </p>
              <p class="my-3">
                <a :href="Contents[44].name" target="_blank">
                  {{ Contents[43].name }}
                </a>
              </p>
              <p>
                <a :href="Contents[46].name" target="_blank">
                  {{ Contents[45].name }}
                </a>
              </p>
            </v-card>

            <!-- フッター -->
            <v-divider class="mt-5" color="#BDBDBD"></v-divider>
            <v-footer color="white text-center ma-0 pa-0">
              <v-container class="ma-0 pa-0">
                <v-row class="ma-0 pa-0 d-flex space-between">
                  <v-col><v-btn depressed large outlined class="my-3" color="orange" href="/contact">お問い合わせ</v-btn></v-col>
                </v-row>
              </v-container>
            </v-footer>

          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {API, graphqlOperation} from "aws-amplify"
  import {listTodos} from "@/graphql/queries"
  import _ from "lodash"

  export default {
    data: () => ({
      Contents: [],
      limit: 50,
      ContentVshow: [],
    //↓ スライドに表示させる画像のパス
      items: [
          {
            src: require('@/assets/activity1.jpg'),
          },
          {
            src: require('@/assets/activity2.jpg'),
          },
          {
            src: require('@/assets/activity3.jpg'),
          },
          {
            src: require('@/assets/activity4.jpg'),
          },
          {
            src: require('@/assets/activity5.jpg'),
          },
          {
            src: require('@/assets/activity6.jpg'),
          },
      ],
    }),
    mounted: function(){
      this.setContents()
    },
    methods: {
      setContents: async function(){
        let Contents = await API.graphql(graphqlOperation(
          listTodos, {limit: this.limit}
        ))
        this.Contents = _.orderBy(Contents.data.listTodos.items, 'id', 'asc').slice(0, 100)
        for (let i=0; i<50; i++){
          if (this.Contents[i].name === "") return
           this.ContentVshow[i] = true
        }
      }
    }
  }
</script>

<style scoped>
  /* ↓↓textareaでの改行をpタグ内でも改行させる↓↓ */
  p {
    white-space: pre-wrap;
  }
</style>>