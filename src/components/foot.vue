<template>
  <div class="bottom">
    <router-link to="/orderMenu">
      <div class="bottomItem active">
        <div class="icon">
          <i class="fa fa-home" aria-hidden="true"></i>
        </div>
        <div class="text">
          首页
        </div>
      </div>
    </router-link>
    <router-link to="/Cart">
      <div class="bottomItem">

        <div class="icon">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <span class="badge badge-pill badge-danger">9</span>
        </div>

        <div class="text">
          购物车
        </div>
      </div>
    </router-link>
    <router-link to="/memberShip">
      <div class="bottomItem ">
        <div class="icon">
          <i class="fa fa-user"></i>
        </div>
        <div class="text">
          我的
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'foot',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
    ,
    mounted: function() {
      $(".bottomItem").click(function () {
        $(".bottomItem").removeClass("active")
        $(this).addClass("active")
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bottom {
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
    background-color: lightgrey;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    background-color: #f6f6f6;
    height: 70px;
    width: 100%;
    border-top: 1px solid #d9d9d9
  }

  .bottomItem {
    height: 30px;
    width: 50px;
    text-align: center;
  }

  .bottomItem.active {
    color: #ff008b;
  }

  .bottomItem .icon {
  }

  .bottomItem .text {
    margin-top: -3px;
    font-size: x-small
  }

  .bottom a {
    text-decoration: none;
    color: inherit
  }
  .bottom .badge {
    font-size: .5em;
    position: absolute
  }
</style>
