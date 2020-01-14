<template>

  <div class="container-fluid ">

    <div id="navbar-example" class="container-fluid MiddleDiv">
      <!--内容显示区 滚动显示-->
      <div class="rightSite" data-spy="scroll" data-target="#divScroll" data-offset="0" style="">

        <div class="coffeeClass panel panel-default" id="late">
          <div class="panel-heading">
            <h6>饮品与小食订单</h6>
          </div>

          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">榛果拿铁</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div style="width:80%;position:absolute;bottom: 0px;color:#ff6c00;font-weight:bold;">
                <i class="fa fa-jpy" aria-hidden="true" style="font-size:xx-small"></i>32
                <span style="float:right">
                  <i class="fa fa-minus-circle" aria-hidden="true" style="color:rgba(130, 118, 119, 0.5)"></i>
                  <span style="margin-left:10px;margin-right:10px">
                    1
                  </span>
                  <span class="fa fa-plus-circle" aria-hidden="false"></span>
                </span>
              </div>

            </div>
          </div>
          <hr>
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://f10.baidu.com/it/u=1436289502,2626023381&fm=72" class="media-object">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">香草拿铁</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div style="width:80%;position:absolute;bottom: 0px;color:#ff6c00;font-weight:bold;">
                <i class="fa fa-jpy" aria-hidden="true" style="font-size:xx-small"></i>28
                <span style="float:right">
                  <i class="fa fa-minus-circle" aria-hidden="true" style="color:rgba(130, 118, 119, 0.5)"></i>
                  <span style="margin-left:10px;margin-right:10px">1</span>
                  <i class="fa fa-plus-circle" aria-hidden="false"></i>
                </span>
              </div>

            </div>
          </div>
          <hr>
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="http://img.qqzhi.com/upload/img_0_3672328174D4236353208_27.jpg" class="media-object">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">焦糖拿铁</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div style="width:80%;position:absolute;bottom: 0px;color:#ff6c00;font-weight:bold;">
                <i class="fa fa-jpy" aria-hidden="true" style="font-size:xx-small"></i>33
                <span style="float:right">
                  <i class="fa fa-minus-circle" aria-hidden="true" style="color:rgba(130, 118, 119, 0.5)"></i>
                  <span style="margin-left:10px;margin-right:10px">1</span>
                  <i class="fa fa-plus-circle" aria-hidden="false"></i>
                </span>
              </div>
            </div>
          </div>
          <hr>
          <div class="balance">
            总金额：
            <i class="fa fa-jpy" aria-hidden="true" style="font-size:xx-small"></i>
            <span style="font-weight:bold">200</span>
            <span class="badge badge-pill badge-danger" style="float:right;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">去结算</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
    name: 'cart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .MiddleDiv {
    height: 100%;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 1em;
  }
  /*内容显示区*/
  .rightSite {
    height: 100%;
    position: relative;
    width: calc(100%);
    padding: 0 .5em;
    overflow: scroll
  }
  /*show the content for coffee order list */
    .rightSite .coffeeClass {
      margin-top: 10px;
      background-color: #f8f9fa;
      border-radius: 1em;
      border: 1px solid #e9ecefb8;
      padding-left: .5em
    }

      .rightSite .coffeeClass .panel-heading {
        font-weight: bold;
        font-size: medium;
        color: #6bac6e;
        padding: 1.5em 0;
        padding-bottom: .5em
      }

    .rightSite .media-heading {
      font-weight: 600;
      font-size: small;
      padding-bottom: .5em
    }

    .rightSite .media-left img {
      height: 60px;
      width: 60px;
    }

    .rightSite .media-body {
      margin-left: 8px;
      height: 60px;
      position: relative
    }

    .rightSite .media-body .detail {
      font-size: 0.1em;
      color: #807878;
    }

    /*菜单内容显示区*/
    .rightSite .rightSiteContent {
      /*background-color: #6f6868;*/
      width: 100%;
      height: auto;
      margin-top: 1px;
    }

    .rightSite .balance {
      padding: 1em 1em
    }

</style>
