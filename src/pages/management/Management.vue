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
                  <!-- {{ Contents }} -->
                  <v-textarea color="#BDBDBD" class="my-0 py-0" auto-grow rows="1" v-model="Contents[10].name" v-show="ContentVshow[10]" />
                  <!-- <v-textarea rows="1" v-model="Contents[0].name" v-show="ContentVshow[0]" :placeholder="Contents[0].name"></v-textarea> -->
              <!-- <v-divider color="#BDBDBD" class="mb-3" /> -->
              <!-- <h4 class="mb-1"></h4> -->
                  <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[11].name" v-show="ContentVshow[11]" :placeholder="Contents[11].name"></v-textarea>
                  <!-- <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[12].name" v-show="ContentVshow[12]" :placeholder="Contents[12].name"></v-textarea> -->
                  <!-- <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[13].name" v-show="ContentVshow[13]" :placeholder="Contents[13].name"></v-textarea> -->
                  <!-- <v-btn small class="my-0 py-0" color="primary" v-show="ContentVshow[12]" v-on:click="ContentDelete(12)">×行を削除</v-btn> -->
                  <!-- <v-btn small color="primary" v-show="!ContentVshow[12]" v-on:click="ContentAdd(12)">＋行を追加</v-btn> -->
            </v-card>
            <!-- 活動内容紹介 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[20].name" v-show="ContentVshow[20]" />
              <!-- <v-divider color="#BDBDBD" class="mb-3" /> -->
                <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[21].name" v-show="ContentVshow[21]" />
                <!-- <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[22].name" v-show="ContentVshow[22]" /> -->
                <!-- <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[23].name" v-show="ContentVshow[23]" /> -->
              <!-- <p class="mb-0">●ウィークエンドマーケット</p> -->
              <!-- <p class="mb-0">●ビアガーデン</p> -->
              <!-- <p class="mb-0">●ハロウィンパーティー</p> -->
            </v-card>

            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[30].name" v-show="ContentVshow[30]" />
                <!-- <p class="my-1">今後の活動目標</p> -->
              <!-- <v-divider color="#BDBDBD" class="mb-3" /> -->
                <h1><v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[31].name" v-show="ContentVshow[31]" /></h1>
                <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[32].name" v-show="ContentVshow[32]" />
                <!-- <v-textarea dense class="my-0 mx-3 py-0" auto-grow rows="1" v-model="Contents[33].name" v-show="ContentVshow[33]" /> -->
              <!-- <h4 class="mb-1">磐田の未来創造へ！！</h4> -->
              <!-- <p class="mb-0">●学生と店舗、起業とのコラボ</p> -->
              <!-- <p class="mb-0">●まちづくりの勉強会</p> -->
              <!-- <p class="mb-0">●市民からのイベント提案</p> -->
            </v-card>

            <!-- 定款・事業報告書 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[40].name" v-show="ContentVshow[40]" />
                <!-- <p class="my-1">定款・事業報告書</p> -->
              <!-- <v-divider color="#BDBDBD" class="mb-3" /> -->
              <v-card-actions class="my-0 py-0">
                <p>➀表示：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[41].name" v-show="ContentVshow[41]" />
              </v-card-actions>
              <v-card-actions class="my-0 pt-0 pb-5">
                <p>➀URL：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[42].name" v-show="ContentVshow[42]" />
              </v-card-actions>
              <v-card-actions class="my-0 py-0">
                <p>➁表示：</p>
                <v-textarea dense class="my-0 pt-5 pb-0" auto-grow rows="1" v-model="Contents[43].name" v-show="ContentVshow[43]" />
              </v-card-actions>
              <v-card-actions class="my-0 pt-0 pb-5">
                <p>➁URL：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[44].name" v-show="ContentVshow[44]" />
              </v-card-actions>
              <v-card-actions class="my-0 py-0">
                <p>➂表示：</p>
                <v-textarea dense class="my-0 pt-5 pb-0" auto-grow rows="1" v-model="Contents[45].name" v-show="ContentVshow[45]" />
              </v-card-actions>
              <v-card-actions class="my-0 py-0">
                <p>➂URL：</p>
                <v-textarea dense class="my-0 py-0" auto-grow rows="1" v-model="Contents[46].name" v-show="ContentVshow[46]" />
              </v-card-actions>
              <!-- <p class="mb-0">
                <a href="https://www.npo-homepage.go.jp/npoportal/document/022000922/teikan/1/%E5%AE%9A%E6%AC%BE.pdf" target="_blank">
                  定款＿特定非営利活動法人いわたタウンマネジメント
                </a>
              </p>
              <p class="my-3">
                <a href="https://www.npo-homepage.go.jp/npoportal/document/022000922/hokoku/201870/2018%E5%B9%B4%E5%BA%A6%E4%BA%8B%E6%A5%AD%E5%A0%B1%E5%91%8A%E6%9B%B8%E7%AD%89.pdf" target="_blank">
                  2018年度事業報告書等
                </a>
              </p>
              <p>
                <a href="https://www.npo-homepage.go.jp/npoportal/document/022000922/hokoku/201770/2017%E5%B9%B4%E5%BA%A6%E4%BA%8B%E6%A5%AD%E5%A0%B1%E5%91%8A%E6%9B%B8%E7%AD%89.pdf" target="_blank">
                  2017年度事業報告書等
                </a>
              </p> -->
            </v-card>

            <!-- フッター -->
            <v-divider class="mt-5" color="#BDBDBD"></v-divider>
            <v-footer color="white text-center ma-0 pa-0">
              <v-container class="ma-0 pa-0">
                <v-row class="ma-0 pa-0 d-flex space-between">
                  <v-col col="3"><v-btn width="50%" depressed large outlined class="ma-5" color="orange" v-on:click="updateTodo()">変更を保存</v-btn></v-col>
                  <v-col col="3"><v-btn width="50%" depressed large outlined class="ma-5" color="orange" v-on:click="setNowContents()">変更をリセット</v-btn></v-col>
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
      ContentVshow: [],  //行の表示・非表示を管理する行列
      limit: 50,
      LineCount: [],
      test: [],

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
      this.setNowContents()
    },
    methods: {
      // DynamoDBのデータを画面に表示
      setNowContents: async function(){
        let Contents = await API.graphql(graphqlOperation(
          listTodos, {limit: this.limit}
        ))
        this.Contents = _.orderBy(Contents.data.listTodos.items, 'id', 'asc').slice(0, 100)
        for (let i=0; i<50; i++){
          if (this.Contents[i].name === ""){
            if (i < 10){                          //i=0~9の時は10の位の数字は0とする
              if (this.LineContent[0] === ""){
                this.LineContent[0] = i
              }
            }else{                                //i < 10の時はLineContentのインデックス番号にContentのインデックス番号の十の位を使う
              let num = String(i)                 //numten：十の位、numone：一の位
              let numten = num.substring(0,1)
              let numone = num.substring(1,2)
              if(this.LineContent[numten] === ""){
                this.LineContent[numten] = numone
              }
            }
          }
          this.ContentVshow[i] = true
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
      ContentDelete: function(id){
        this.Contents[id].name  = ""
        this.ContentVshow[id] = false
      },
      // 表示画面に1行追加
      ContentAdd: function(id){
        this.ContentVshow[id] = true
        this.Contents[id].name = "編集してください"
      }
    }
  } 
</script> 