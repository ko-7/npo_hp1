<template>
  <v-app>
    <!-- コンテンツとフッターのラッパー（サイズ調整用） -->
    <v-content>
      <v-container>
        <v-row class="ma-0 pa-0" justify="center">
          <v-col cols="12" sm="10" md="10" lg="8" xl="6" class="mb-5 mx-0 pa-1" style="border: 3px solid; border-color:orange;">
            <!-- ヘッダー -->
            <v-btn outlined color="orange" width="100%" class="mb-5">
              <h1 class="font-weight-medium mb-0">管理画面</h1>
            </v-btn>
            <p class="font-weight-medium mb-0">いわたタウンマネジメント</p>
            <v-divider color="#BDBDBD" />
            <v-app-bar color="white" flat class="my-3">
                <v-toolbar-title>
                  <v-card class="my-1" width="100%" tile flat href="/">
                    <v-img src="@/assets/logo.jpg" />
                  </v-card>
                </v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                    <v-btn text class="px-3 text-caption" href="/">
                        <div align="center">
                            <v-icon class="mb-1" style="color:#FFD700;">mdi-home</v-icon>
                            <v-spacer></v-spacer>
                            <p class="mb-0">TOP</p>
                        </div>
                    </v-btn>
                </v-toolbar-items>
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
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[10].name" />
                <!-- <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[0].name" v-show="ContentVshow[0]" /> -->
                <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[11].name" />
            </v-card>

            <!-- 活動内容紹介 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[20].name" />
                <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[21].name" />
            </v-card>

            <!-- 今後の活動目標 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[30].name" />
                <h1><v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[31].name" /></h1>
                <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[32].name" />
            </v-card>

            <!-- 定款・事業報告書 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[40].name" />
              <v-card-actions class="my-0 py-0">
                <p>➀表示：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[41].name" />
              </v-card-actions>
              <v-card-actions class="my-0 pt-0 pb-5">
                <p>➀URL：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[42].name" />
              </v-card-actions>
              <v-card-actions class="my-0 pt-5 pb-0">
                <p>➁表示：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[43].name" />
              </v-card-actions>
              <v-card-actions class="my-0 pt-0 pb-5">
                <p>➁URL：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[44].name" />
              </v-card-actions>
              <v-card-actions class="my-0 pt-5 pb-0">
                <p>➂表示：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[45].name" />
              </v-card-actions>
              <v-card-actions class="my-0 py-0">
                <p>➂URL：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[46].name" />
              </v-card-actions>
            </v-card>

            <!-- フッター -->
            <v-divider class="mt-5" color="#BDBDBD"></v-divider>
            <v-footer color="white text-center ma-0 pa-0">
              <v-container class="ma-0 pa-0">
                <v-row class="ma-0 pa-0 d-flex space-between">
                  <v-col col="3"><v-btn width="50%" depressed large outlined class="ma-5" color="orange" v-on:click="updateTodo()">変更を保存</v-btn></v-col>
                  <v-col col="3"><v-btn width="50%" depressed large outlined class="ma-5" color="orange" v-on:click="setContents()">変更をリセット</v-btn></v-col>
                  <!-- <v-col col="3"><v-btn width="50%" depressed large outlined class="ma-5" color="orange" v-on:click="CreateTodo()">連続CREATE</v-btn></v-col> -->
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
  // import {createTodo} from "@/graphql/mutations"
  import {listTodos} from "@/graphql/queries"
  import {updateTodo} from "@/graphql/mutations"
  import _ from "lodash"

  export default {
    data: () => ({
      Contents: [],
      // ContentVshow: [],  //行の表示・非表示を管理する行列
      limit: 50,
      // LineCount: [],
      // test: [],

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
    // ページ読み込みの最初に実行する関数 created? mounted?
    mounted: function(){
      this.setContents()
    },
    methods: {
      // DynamoDBのデータを画面に表示
      setContents: async function(){
        let Contents = await API.graphql(graphqlOperation(
          listTodos, {limit: this.limit}
        ))
        this.Contents = _.orderBy(Contents.data.listTodos.items, 'id', 'asc').slice(0, 100)
        for (let i=0; i<50; i++){
          if (this.Contents[i].name === ""){
            // if (i < 10){                          //i=0~9の時は10の位の数字は0とする
              // if (this.LineContent[0] === ""){
                // this.LineContent[0] = i
              // }
            // }else{                                //i < 10の時はLineContentのインデックス番号にContentのインデックス番号の十の位を使う
              // let num = String(i)                 //numten：十の位、numone：一の位
              // let numten = num.substring(0,1)
              // let numone = num.substring(1,2)
              // if(this.LineContent[numten] === ""){
                // this.LineContent[numten] = numone
              // }
            // }
            return
          }
          // this.ContentVshow[i] = true
        }
      },
      // 編集したデータをDynamoDBに保存
      updateTodo: async function(){
        try {
          let num = null
          for (let i=0; i<50; i++){
            if(i<10){
              num = "0" + String(i)
            }else{
              num = i
            }
            await API.graphql(graphqlOperation(
              updateTodo, {input: {id: num, name: this.Contents[i].name}}
            ))
          }
        } catch (error){
          error
        }
      },
      // CreateTodo: async function(){
      //   for (let i=37; i<50; i++){
      //     await API.graphql(graphqlOperation(
      //       createTodo, {input: {id: i, name: "test"+i}}
      //     ))
      //   }
      // },

      // 表示画面から1行削除
      // ContentDelete: function(id){
      //   this.Contents[id].name  = ""
      //   this.ContentVshow[id] = false
      // },
      // 表示画面に1行追加
      // ContentAdd: function(id){
      //   this.ContentVshow[id] = true
      //   this.Contents[id].name = "編集してください"
      // }
    }
  } 
</script> 