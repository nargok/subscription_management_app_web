<template>
  <div style="max-width: 1280px">
    <h3>サブスク一覧</h3>
    <div>
      <p>今月の利用料金: {{ monthlyTotalPrice }}円</p>
      <div class="add_service_button">
        <el-button type="primary" @click="addService">
          新規登録
        </el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="title"
        label="Title"
        width="180"
        show-overflow-tooltip
      />
      <el-table-column label="URL">
        <template slot-scope="scope">
          <a
            v-bind:href="scope.row.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ scope.row.url }}
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="monthlyPrice" label="月額費用" width="180" />
      <el-table-column label="ステータス" width="180">
        <template slot-scope="scope">
          {{ getAlias(scope.row.status) }}
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">
            Edit
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { profileStore } from "@/store/profile/profile";
import { LoginParams } from "@/store/profile/profile.interface";
import { serviceStore } from "@/store/service/service";
import { getStatusAlias } from "@/utils/services";
import { splictConnmars } from "@/utils/index";

@Component({
  components: {}
})
export default class SubscriptionList extends Vue {
  private get tableData() {
    return serviceStore.getServiceList;
  }

  private get monthlyTotalPrice() {
    return splictConnmars(serviceStore.MonthlyTotalPrice);
  }

  private handleEdit() {
    console.log("handleEdit");
  }

  private handleDelete() {
    console.log("handleDelete");
  }
  private getAlias(status: string) {
    return getStatusAlias(status);
  }

  private addService() {
    this.$router.push("/createService");
  }
}
</script>

<style scoped>
.add_service_button {
  text-align: right;
  padding-right: 20px;
}
</style>
