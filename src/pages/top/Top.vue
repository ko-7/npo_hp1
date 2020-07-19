<template>
  <v-app>
    <!-- 背景全面を灰色にするためのcard -->
    <!-- <v-card color="blue-grey lighten-5 text-caption pa-0 ma-0" width="100%" height="100%" flat> -->
    <!-- コンテンツとフッターのラッパー（サイズ調整用） -->
    <v-content>
      <v-container>
        <v-row class="ma-0 pa-0" justify="center">
          <v-col cols="12" sm="10" md="10" lg="8" xl="6" class="mb-5 mx-0 pa-0">
            <!-- 以下コンテンツ(背景白部分の全体) -->
            <!-- <v-card tile width="100%" height="100%" flat> -->
                <!-- ヘッダー -->
                <p class="font-weight-medium mb-0">【一言メッセージ】</p>
                <v-divider color="#BDBDBD"></v-divider>
                <v-app-bar color="white" flat class="my-5">
                    <v-toolbar-title>
                      <a href="/">
                        【ロゴ】いわたタウンマネジメント
                      </a>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn text class="px-5 text-caption" href="/organization.html">
                            <div>
                                <v-icon class="mb-3">mdi-account</v-icon>
                                <v-spacer></v-spacer>
                                組織
                            </div>
                        </v-btn>
                        <!-- <v-btn text class="px-1 text-caption">
                            <div>
                                <v-icon class="mb-3">mdi-email</v-icon>
                                <v-spacer></v-spacer>
                                お問い合わせ
                            </div>
                        </v-btn> -->
                    </v-toolbar-items>
                </v-app-bar>

                <br>

                <!-- 画像スライド -->
                <v-responsive :aspect-ration="1.7">
                  <v-carousel cycle height="100%" width="100%" hide-delimiter-background :show-arrows="false">
                    <v-carousel-item
                      v-for="(item,i) in items"
                      :key="i"
                      :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                </v-responsive>

                <!-- 活動内容紹介 -->
                <v-card flat class="my-5">
                  <v-divider color="#BDBDBD"></v-divider>
                    <p class="my-1">活動内容</p>
                  <v-divider color="#BDBDBD"></v-divider>
                  <h4 class="mb-1">フリーマーケット</h4>
                  <p class="mb-0">磐田市内でフリーマーケットを企画し、定期的に開催しています。</p>
                  <p class="mb-0"></p>
                </v-card>
                <v-card flat class="my-5">
                  <v-divider color="#BDBDBD"></v-divider>
                    <p class="my-1">今後の予定</p>
                  <v-divider color="#BDBDBD"></v-divider>
                  <h4 class="mb-1">空き家のリノベーション</h4>
                  <p class="mb-0">ご自身が「暮らすため」あるいは「賃貸や売却で利益を得るため」といった理由から、空き家のリフォーム・リノベーションを検討する方が増えつつあります。「古い空き家を所有し続けることにより、固定資産税が高くなってしまわないか」と不安に思う方もいらっしゃるでしょう。とは言え、リフォームの際には工事費用がいくらかかるか、またどのような工事が必要か、心配な方もきっと多いはず。</p>
                  <p>そこで、私たちいわたタウンマネジメントでそういった方々をサポートしたいと思っています。</p>
                </v-card>


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

            <!-- </v-card> -->
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!-- </v-card> -->
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
        ],
    }),
  }
</script>