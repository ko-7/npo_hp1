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
                    <v-btn text class="px-3 text-caption" href="/organization.html">
                        <div align="center">
                            <v-icon class="mb-1">mdi-account</v-icon>
                            <v-spacer></v-spacer>
                            <p class="mb-0">方針</p>
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
                <p class="my-1">いわたタウンマネジメントとは</p>
              <v-divider color="#BDBDBD" class="mb-3" />
              <h4 class="mb-1"></h4>
              <p class="mb-0">磐田市内の生活者、商店、企業、行政、他各種団体に対して、中心市街地と郊外市街地の連携と地域の個人・組織の枠を超えた人財の融合によるタウンマネジメントに関する事業を行い、先人が培ってきた歴史や文化、風土を最大限に活かし住みよい地域環境の創造と活力ある地域経済の発展に寄与することを目的とする。</p>
            </v-card>
            <!-- 活動内容紹介 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <p class="my-1">活動内容</p>
              <v-divider color="#BDBDBD" class="mb-3" />
              <p class="mb-0">●ウィークエンドマーケット</p>
              <p class="mb-0">●ビアガーデン</p>
              <p class="mb-0">●ハロウィンパーティー</p>
            </v-card>
                
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <p class="my-1">今後の活動目標</p>
              <v-divider color="#BDBDBD" class="mb-3" />
              <h4 class="mb-1">磐田の未来創造へ！！</h4>
              <p class="mb-0">●学生と店舗、起業とのコラボ</p>
              <p class="mb-0">●まちづくりの勉強会</p>
              <p class="mb-0">●市民からのイベント提案</p>
            </v-card>

            <!-- 組織紹介 -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <p class="my-1">定款・事業報告書</p>
              <v-divider color="#BDBDBD" class="mb-3" />
              <p class="mb-0">
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
              </p>
            </v-card>

            <!-- フッター -->
            <v-divider class="mt-5" color="#BDBDBD"></v-divider>
            <v-footer color="white text-center ma-0 pa-0">
              <v-container class="ma-0 pa-0">
                <v-row class="ma-0 pa-0 d-flex space-between">
                  <!-- <v-col cols="12" md="4" lg="3" class="ma-0 pa-0" align="left">メール： npo@npo.com</v-col> -->
                  <!-- <v-col cols="12" md="4" lg="3" class="ma-0 pa-0" align="left">電話番号：012-1234-1234</v-col> -->
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
  export default {
    data: () => ({
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
  }
</script>