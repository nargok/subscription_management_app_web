<template>
  <div>
    <h3 v-if="isEdit">サブスクの編集</h3>
    <h3 v-else>サブスクの登録</h3>
    <el-form ref="form" label-width="120px">
      <el-form-item label="タイトル">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="URL">
        <el-input v-model="url"></el-input>
      </el-form-item>
      <el-form-item label="月額費用">
        <el-input v-model="price" type="number"></el-input>
      </el-form-item>
      <el-form-item label="利用中">
        <el-switch v-model="status"> </el-switch>
      </el-form-item>
      <el-form-item label="メモ">
        <el-input v-model="memo" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="cancel">
          キャンセル
        </el-button>
        <el-button @click="createService" type="primary">
          登録
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { gameStore } from "@/store/game/game";
import { GameCreateParams } from "@/store/game/game.interface";

@Component({
  components: {}
})
export default class GameRegister extends Vue {
  private title: string | null = null;
  private url: string | null = null;
  private price = 0;
  private memo: string | null = null;
  private status = true;

  private get isEdit() {
    return this.$route.params.id ? true : false;
  }

  private async createService() {
    if (this.title && this.url) {
      const createGameParams: GameCreateParams = {
        title: this.title,
        url: this.url,
        price: this.price,
        memo: this.memo ? this.memo : ""
      };
      await gameStore.createGame(createGameParams);
      this.$router.push("/games");
    }
  }

  private cancel() {
    this.$router.push("/services");
  }
}
</script>
