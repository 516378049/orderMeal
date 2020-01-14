<template>
  <div class="container-fluid">
    <div class="memberNav nav1">

      <div class="bottomItem">
        <div class="number">
          50.00  <span class="unit">元</span>
        </div>
        <div class="text">
          账户余额
        </div>
      </div>
      <div class="bottomItem">
        <div class="bottomItem">
          <div class="number">
            2  <span class="unit">张</span>
          </div>
          <div class="text">
            咖啡钱包
          </div>
        </div>
      </div>
      <div class="bottomItem ">
        <div class="bottomItem">
          <div class="number">
            0  <span class="unit">张</span>
          </div>
          <div class="text">
            优惠券
          </div>
        </div>
      </div>

      <div class="bottomItem ">
        <div class="bottomItem">
          <div class="number">
            10  <span class="unit">张</span>
          </div>
          <div class="text">
            礼品卡
          </div>
        </div>
      </div>

    </div>
    <div class="memberNav nav2 ">
      <ul class="list-group">
        <li class="list-group-item  align-items-center">
          <i class="fa fa-home" aria-hidden="true"></i>
          <a>收货地址</a>
          <span class="badge badge-primary badge-pill">14</span>
        </li>
        <li class="list-group-item  align-items-center">
          <i class="fa fa-user" aria-hidden="true"></i>
          <a>邀请好友</a>
          <span class="badge badge-primary badge-pill">10</span>
        </li>

        <li class="list-group-item  align-items-center">
          <i class="fa fa-home" aria-hidden="true"></i>
          <a>兑换优惠</a>
          <span class="badge badge-primary badge-pill">0</span>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'memberShip',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .memberNav {
  margin: 20px 10px;
  padding: 20px 10px;
  }

  .memberNav.nav1 {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    width: 400px;
    height: 250px;
    /*background-color: lightgrey;*/
    overflow: hidden;
    /*background-color: #f6f6f6;*/
    height: 70px;
    width: 100%;
    /*border-top: 1px solid #d9d9d9;*/
    padding-left: 10px;
    padding-right: 10px
  }

  .memberNav a {
    margin-left: 10px
  }

  .badge {
  float: right
  }
  .bottomItem {
  /*background-color: cornflowerblue;*/
  height: 30px;
  width: 50px;
  text-align: center;
  /*vertical-align:central;
  align-items:center*/
  /*margin: 10px;*/
  }

  .bottomItem.active {
    color: #ff008b;
  }

  .bottomItem .number {
    font-size: small;
    font-weight: bold;
    color: #1787ff
  }

    .bottomItem .number .unit {
      font-size: .1em;
      font-weight: normal;
    }

  .bottomItem .text {
    /*background-color: blueviolet;*/
    margin-top: 3px;
    font-size: xx-small
  }

  .bottom a {
  /*background-color: blueviolet;*/
  text-decoration: none;
  color: inherit
  }
</style>
