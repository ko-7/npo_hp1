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
              <v-toolbar-items>
                <v-btn text class="px-3 text-caption" href="/">
                  <div align="center">
                    <v-icon class="mb-1" style="color:#FFD700;">mdi-home</v-icon>
                    <v-spacer />
                    <p class="mb-0">TOP</p>
                  </div>
                </v-btn>
              </v-toolbar-items>
            </v-app-bar>
                
            <!-- 画像 -->
            <v-card class="my-5" width="100%" tile>
              <v-img src="@/assets/organization.png" />
            </v-card>

            <!-- お問い合わせフォーム -->
            <v-card flat class="my-5">
              <v-divider color="#BDBDBD" />
                <p class="my-1">お問い合わせフォーム</p>
              <v-divider color="#BDBDBD" class="mb-3" />

              <v-form ref="submit_form">
                <v-col cols="12" sm="6" class="mb-0">
                  <v-text-field
                    label="お名前[任意]"
                    placeholder=" "
                    v-model="name"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="メールアドレス[必須]"
                    placeholder=" "
                    v-model="email"
                    :rules="emailRules"
                    required
                  />
                </v-col>
                <v-col cols="12" sm="10">
                  <v-textarea
                    label="お問い合わせ内容[必須]"
                    placeholder=" "
                    auto-grow
                    outlined
                    rows="5"
                    row-height="24"
                    v-model="content"
                    :rules="contentRules"
                    required
                  />
                </v-col>
                <v-btn depressed small color="primary" id="submit_button" @click="sendmail()">送信</v-btn>
              </v-form>
            </v-card>

            <!-- フッター -->
            <v-divider class="mt-5" color="#BDBDBD" />
            <v-footer color="white text-center">
              <v-container class="ma-0 pa-0">
                <v-row class="ma-0 pa-0">
                  <!-- <v-col cols="12" md="5" lg="4" class="ma-0 pa-0" align="left">メール： npo@npo.com</v-col> -->
                  <!-- <v-col cols="12" md="5" lg="4" class="ma-0 pa-0" align="left">電話番号：012-1234-1234</v-col> -->
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
  // import axios from "axios"
  export default {
    data: () => ({
      name: null,
      email: null,
      emailRules: [
        v => !!v || '必須項目です。',
        v => /[a-zA-Z0-9]+@.+\..+/.test(v) || 'メールアドレスを入力してください。'
      ],
      content: null,
      contentRules: [
        v => !!v || '必須項目です。'
      ],
    }),
    methods: {
      sendmail(){
        if (this.$refs.submit_form.validate()){
          const apiUrl = "https://niz8sva5w6.execute-api.ap-northeast-1.amazonaws.com/v1/sendmail"
          const params = {
            name: this.name,
            email: this.email,
            content: this.content,
          }
          this.$axios.post(apiUrl, params).then(response => {
            console.log(response),
            this.name = null
            this.email = null
            this.content = null
            this.$refs.submit_form.resetValidation()
            window.alert('お問い合わせの送信が完了しました。')
          }).catch(error => {
            console.log(error)
          })
        }
      },
    },
  }
</script>