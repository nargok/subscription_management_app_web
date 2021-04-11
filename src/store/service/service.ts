import store from "@/store";
import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import axios from "axios";
import { Service } from "@/store/service/service.interface";
import { Status } from "@/constants/index";

@Module({ dynamic: true, store, name: "service", namespaced: true })
class ServiceModule extends VuexModule {
  private serviceList: Service[] = [
    {
      id: 1,
      title: "Netflix",
      url: "https://www.netflix.com/jp/",
      monthlyPrice: 1380,
      status: "Available",
      memo: "みたいアニメがなくなったから一旦停止中"
    },
    {
      id: 2,
      title: "Amazon PRIME",
      url: "https://www.amazon.co.jp",
      monthlyPrice: 1000,
      status: "Stopped",
      memo: "星4つ以上の映画が気になっている"
    }
  ];

  public get getServiceList() {
    return this.serviceList;
  }

  public get MonthlyTotalPrice() {
    return this.serviceList.reduce((sum, element) => {
      return element.status === Status.available
        ? sum + element.monthlyPrice
        : sum + 0;
    }, 0);
  }

  @Mutation
  private setServices(services: Service[]) {
    this.serviceList = services;
  }

  // @Action
  // public async getGameList() {
  //   // eslint-disable-next-line no-useless-catch
  //   try {
  //     const response = await axios.get("/games");
  //     this.setGames(response.data);
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // @Action
  // public async getGameById(id: number) {
  //   // eslint-disable-next-line no-useless-catch
  //   try {
  //     const response = await axios.get(`/games/${id}`);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // @Action async createGame(createGameParams: GameCreateParams) {
  //   // eslint-disable-next-line no-useless-catch
  //   try {
  //     await axios.post("/games", {
  //       ...createGameParams
  //     });
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // @Action async updateGame(updateGameParams: GameUpdateParams) {
  //   // eslint-disable-next-line no-useless-catch
  //   try {
  //     await axios.put(`/games/${updateGameParams.id}`, {
  //       ...updateGameParams
  //     });
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // @Action async deleteGame(id: number) {
  //   // eslint-disable-next-line no-useless-catch
  //   try {
  //     await axios.delete(`/games/${id}`);
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

export const serviceStore = getModule(ServiceModule);
