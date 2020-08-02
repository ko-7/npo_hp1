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
                    </v-toolbar-items>
                </v-app-bar>

                <!-- 画像スライド -->
                <v-responsive :aspect-ration="1.7">
                  <v-carousel continuous cycle width="100%" hide-delimiter-background :show-arrows="false">
                    <v-carousel-item
                      v-for="(item,i) in items"
                      :key="i"
                      :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                </v-responsive>

                <!-- 組織紹介 -->
                <v-card flat class="my-5">
                  <v-divider color="#BDBDBD"></v-divider>
                    <p class="my-1">いわたタウンマネジメントとは</p>
                  <v-divider color="#BDBDBD" class="mb-3"></v-divider>
                  <h4 class="mb-1"></h4>
                  <p class="mb-0">磐田市内の生活者、商店、企業、行政、他各種団体に対して、中心市街地と郊外市街地の連携と地域の個人・組織の枠を超えた人財の融合によるタウンマネジメントに関する事業を行い、先人が培ってきた歴史や文化、風土を最大限に活かし住みよい地域環境の創造と活力ある地域経済の発展に寄与することを目的とする。</p>
                </v-card>
                <!-- 活動内容紹介 -->
                <v-card flat class="my-5">
                  <v-divider color="#BDBDBD"></v-divider>
                    <p class="my-1">活動内容</p>
                  <v-divider color="#BDBDBD" class="mb-3"></v-divider>
                  <p class="mb-0">●ウィークエンドマーケット</p>
                  <p class="mb-0">●ビアガーデン</p>
                  <p class="mb-0">●ハロウィンパーティー</p>
                </v-card>
                <!-- <v-card flat class="my-5">
                  <v-divider color="#BDBDBD"></v-divider>
                    <p class="my-1">今後の予定</p>
                  <v-divider color="#BDBDBD"></v-divider>
                  <h4 class="mb-1">空き家のリノベーション</h4>
                  <p class="mb-0">ご自身が「暮らすため」あるいは「賃貸や売却で利益を得るため」といった理由から、空き家のリフォーム・リノベーションを検討する方が増えつつあります。「古い空き家を所有し続けることにより、固定資産税が高くなってしまわないか」と不安に思う方もいらっしゃるでしょう。とは言え、リフォームの際には工事費用がいくらかかるか、またどのような工事が必要か、心配な方もきっと多いはず。</p>
                  <p>そこで、私たちいわたタウンマネジメントでそういった方々をサポートしたいと思っています。</p>
                </v-card> -->


                <!-- フッター -->
                <v-divider class="mt-5" color="#BDBDBD"></v-divider>
                <v-footer color="white text-center ma-0 pa-0">
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