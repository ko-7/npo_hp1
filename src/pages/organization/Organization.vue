<template>
  <v-app>
    <!-- 背景全面を灰色にするためのcard -->
    <v-card color="blue-grey lighten-5 text-caption" width="100%" height="100%" flat>
    <!-- コンテンツとフッターのラッパー（サイズ調整用） -->
    <v-content class="mx-0 my-5 px-0 py-4">
      <v-container>
        <v-row class="ma-0 pa-0" justify="center">
          <v-col cols="12" sm="10" md="10" lg="8" xl="6" class="mb-5 mx-0 pa-0">
            <!-- 以下コンテンツ(背景白部分の全体) -->
            <v-card tile class="pa-5" width="100%" height="100%" flat>
                <!-- ヘッダー -->
                <p class="font-weight-medium mb-0">【➀一言メッセージ】</p>
                <v-divider color="#BDBDBD"></v-divider>
                <v-app-bar color="white" flat class="my-5">
                    <v-toolbar-title><a href="/">➁いわたタウンマネジメント</a></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn text class="px-5 text-caption" href="../organization/Organization.vue">
                            <div>
                                <v-icon class="mb-3">mdi-account</v-icon>
                                <v-spacer></v-spacer>
                                  ➂組織
                            </div>
                        </v-btn>
                        <v-btn text class="px-1 text-caption">
                            <div>
                                <v-icon class="mb-3">mdi-email</v-icon>
                                <v-spacer></v-spacer>
                                ➃お問い合わせ
                            </div>
                        </v-btn>
                    </v-toolbar-items>
                </v-app-bar>

                <br>
                
                <!-- 画像 -->
                <v-card class="my-5" width="100%" tile>
                  <v-img src="@/assets/organization.png"></v-img>
                </v-card>

                <!-- 組織紹介 -->
                <v-card flat class="my-5">
                  <v-divider color="#BDBDBD"></v-divider>
                    <p class="my-1">いわたタウンマネジメントとは</p>
                  <v-divider color="#BDBDBD"></v-divider>
                  <h4 class="mb-1"></h4>
                  <p class="mb-0">磐田市内の生活者、商店、企業、行政、他各種団体に対して、中心市街地と郊外市街地の連携と地域の個人・組織の枠を超えた人財の融合によるタウンマネジメントに関する事業を行い、先人が培ってきた歴史や文化、風土を最大限に活かし住みよい地域環境の創造と活力ある地域経済の発展に寄与することを目的とする。</p>
                  <p class="mb-0"><a href="https://www.npo-homepage.go.jp/npoportal/document/022000922/teikan/1/%E5%AE%9A%E6%AC%BE.pdf">定款</a></p>
                </v-card>
                <v-card flat class="my-5">
                  <v-divider color="#BDBDBD"></v-divider>
                    <p class="my-1">事業報告書</p>
                  <v-divider color="#BDBDBD"></v-divider>
                  <p class="my-3">
                    <a href="https://www.npo-homepage.go.jp/npoportal/document/022000922/hokoku/201870/2018%E5%B9%B4%E5%BA%A6%E4%BA%8B%E6%A5%AD%E5%A0%B1%E5%91%8A%E6%9B%B8%E7%AD%89.pdf">
                      2018年度事業報告書等
                    </a>
                  </p>
                  <p>
                    <a href="https://www.npo-homepage.go.jp/npoportal/document/022000922/hokoku/201770/2017%E5%B9%B4%E5%BA%A6%E4%BA%8B%E6%A5%AD%E5%A0%B1%E5%91%8A%E6%9B%B8%E7%AD%89.pdf">
                      2017年度事業報告書等
                    </a>
                  </p>
                </v-card>

                <!-- フッター -->
                <v-divider class="mt-5" color="#BDBDBD"></v-divider>
                <v-footer color="white text-center">
                  <v-toolbar-item class="justify-center">
                    メール： npo@npo.com | 
                    電話番号：012-1234-1234
                  </v-toolbar-item>
                </v-footer>

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
    }),
  }
</script>