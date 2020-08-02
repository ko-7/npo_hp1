<template>
  <v-app>
    <!-- コンテンツとフッターのラッパー（サイズ調整用） -->
    <v-content>
      <v-container>
        <v-row class="ma-0 pa-0" justify="center">
          <v-col cols="12" sm="10" md="10" lg="8" xl="6" class="mb-5 mx-0 pa-0">
                <!-- ヘッダー -->
                  <p class="font-weight-medium mb-0">いわたタウンマネジメント</p>
                <v-divider color="#BDBDBD"></v-divider>
                <v-app-bar color="white" flat class="my-3">
                    <v-toolbar-title>
                      <v-card class="my-1" width="100%" tile flat href="/">
                        <v-img src="@/assets/logo.jpg"></v-img>
                      </v-card>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn text class="px-3 text-caption" href="/">
                            <div align="center">
                                <v-icon class="mb-1">mdi-home</v-icon>
                                <v-spacer></v-spacer>
                                <p class="mb-0">TOP</p>
                            </div>
                        </v-btn>
                        <v-btn text class="px-3 text-caption" href="/organization.html">
                            <div align="center">
                                <v-icon class="mb-1" style="color:#FFD700;">mdi-account</v-icon>
                                <v-spacer></v-spacer>
                                <p class="mb-0">方針</p>
                            </div>
                        </v-btn>
                    </v-toolbar-items>
                </v-app-bar>
                
                <!-- 画像 -->
                <v-card class="my-5" width="100%" tile>
                  <v-img src="@/assets/organization.png"></v-img>
                </v-card>

                <v-card flat class="my-5">
                  <v-divider color="#BDBDBD"></v-divider>
                    <p class="my-1">今後の活動目標</p>
                  <v-divider color="#BDBDBD" class="mb-3"></v-divider>
                  <h4 class="mb-1">磐田の未来創造へ！！</h4>
                  <p class="mb-0">●学生と店舗、起業とのコラボ</p>
                  <p class="mb-0">●まちづくりの勉強会</p>
                  <p class="mb-0">●市民からのイベント提案</p>
                </v-card>

                <!-- 組織紹介 -->
                <v-card flat class="my-5">
                  <v-divider color="#BDBDBD"></v-divider>
                    <p class="my-1">定款・事業報告書</p>
                  <v-divider color="#BDBDBD" class="mb-3"></v-divider>
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
                <v-footer color="white text-center">
                  <v-container class="ma-0 pa-0">
                    <v-row class="ma-0 pa-0">
                      <v-col cols="12" md="4" lg="3" class="ma-0 pa-0" align="left">メール： npo@npo.com</v-col>
                      <v-col cols="12" md="4" lg="3" class="ma-0 pa-0" align="left">電話番号：012-1234-1234</v-col>
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
      language: null,
    }),
  }
</script>