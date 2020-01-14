<template>
  <div class="container-fluid ">
    <div class="top" id="top">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" style="height:180px">
          <div class="carousel-item active">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1108046519,1758737670&fm=26&gp=0.jpg" class="d-block w-100" alt="..." style="height:180px">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3649825377,1899471167&fm=26&gp=0.jpg" class="d-block w-100" style="height:180px" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3275347948,2833149022&fm=26&gp=0.jpg" class="d-block w-100" style="height:180px" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div style="background-color:#f5f5f5;width:100%;color:#28a745;font-size:smaller;">
        <span style="background-color:#f5f5f5;width:100%">公告：元旦节优惠活动进行中...</span>
        <hr />
      </div>
    </div>
    <div id="navbar-example" class="container-fluid MiddleDiv" style="margin-top:-10px">
      <!--左侧菜单-->
      <div class="leftSite">
        <ul class="nav" id="divScroll">
          <li class="list-group-item">
            <a href="#late" @click.prevent="scrollTop('late')" class="list-group-item active">拿铁</a>
          </li>
          <li class="list-group-item">
            <a href="#late1" @click.prevent="scrollTop('late1')" class="list-group-item">饮品</a>
          </li>
          <li class="list-group-item">
            <a href="#late2" @click.prevent="scrollTop('late2')" class="list-group-item">星巴克冲煮咖啡 </a>
          </li>
          <li class="list-group-item">
            <a href="#late3" @click.prevent="scrollTop('late3')" class="list-group-item">冰激凌系列</a>
          </li>
          <li class="list-group-item">
            <a href="#late4" @click.prevent="scrollTop('late4')" class="list-group-item">冷萃咖啡</a>
          </li>
        </ul>
      </div>
      <!--内容显示区-->
      <div class="rightSite" data-spy="scroll" data-target="#divScroll" data-offset="0" style="height:500px;overflow:auto; position: relative;">

        <div class="coffeeClass panel panel-default" id="late">
          <div class="panel-heading">
            <h6 class="panel-title">
              拿铁
            </h6>
          </div>

          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">榛果拿铁</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
              <div style="width:80%;position:absolute;bottom: 0px;color:#ff6c00;font-weight:bold;">
                <i class="fa fa-jpy" aria-hidden="true" style="font-size:xx-small"></i>32
                <span style="float:right">
                  <i class="fa fa-minus-circle" aria-hidden="true" style="color:rgba(130, 118, 119, 0.5)"></i>
                  <span style="margin-left:10px;margin-right:10px">1</span>
                  <span class="fa fa-plus-circle" aria-hidden="false"></span>
                </span>
              </div>

            </div>
          </div>
          <hr>
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://f10.baidu.com/it/u=1436289502,2626023381&fm=72" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">香草拿铁</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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
              <img src="http://img.qqzhi.com/upload/img_0_3672328174D4236353208_27.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">焦糖拿铁</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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

        </div>

        <div class="coffeeClass panel panel-default" id="late1">
          <div class="panel-heading">
            <h6 class="panel-title">
              饮品
            </h6>
          </div>

          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">加浓美式</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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

        </div>

        <div class="coffeeClass panel panel-default" id="late2">
          <div class="panel-heading">
            <h6 class="panel-title">
              星巴克冲煮咖啡
            </h6>
          </div>

          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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

        </div>

        <div class="coffeeClass panel panel-default" id="late3">
          <div class="panel-heading">
            <h6 class="panel-title">
              冰激凌系列
            </h6>
          </div>

          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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

        </div>

        <div class="coffeeClass panel panel-default" id="late4">
          <div class="panel-heading">
            <h6 class="panel-title">
              冷萃咖啡
            </h6>
          </div>

          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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
          <div class="media panel-body">
            <div class="media-left media-middle">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644321729,3759086876&fm=26&gp=0.jpg" class="media-object" style="width:80px;height:80px">
            </div>
            <div class="media-body">
              <h5 class="media-heading" style="margin-bottom:0rem">美式咖啡</h5>
              <div class="detail">浓缩、单糖、单奶</div>
              <div class="detail">月售 13 赞12</div>
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

        </div>

      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'orderMenu',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      testAlert: function (text) {
        alert(text)
      },
      scrollTop: function (id) {
        var container = $('.rightSite')
        var scrollTo = $('#' + id)
        container.animate(
          { scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() }, 1000
        )
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container-fluid {
    width: 100%;
    padding: 0;
    height: 100%
  }

  .top {
    top: 0;
    margin-top: 0
  }



  .MiddleDiv {
    height: 100%;
    padding: 0
  }

  .leftSite {
    /*background-color:#161414;*/
    float: left;
    width: 80px;
    height: 100%;
    background-color: #f5f5f5;
  }

    .leftSite .list-group-item {
      width: 100%;
      display: block;
      padding: 0;
      border: none;
    }

      .leftSite .list-group-item a {
        width: 100%;
        height: 100%;
        display: block;
        color: #807878;
        text-align: center;
        border: none;
        padding: .75rem .5rem;
        background-color: rgb(245, 245, 245);
        border-radius: 0;
        font-size: smaller;
      }

    .leftSite a:hover {
      text-decoration: none
    }



    .leftSite .list-group-item .active {
      background-color: #ffffff;
      color: #ff6c00;
      font-size: medium
    }


  /*内容显示区*/
  .rightSite {
    float: left;
    /*background-color: #6f6868;*/
    width: calc(100% - 80px);
    padding: 0 .5em;
    height: 100%;
    overflow: scroll
  }

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
        padding-top: .5em;
        padding-bottom: .5em
      }

    .rightSite .media-heading {
      font-weight: 600;
      font-size: small;
      padding-bottom: .5em
    }

    .rightSite .media-body {
      margin-left: 8px;
      height: 80px;
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
  /*显示图片DIV*/
  .DivLeftImg {
    height: auto;
    width: 30%;
    float: left;
  }
  /*显示内容Div*/
  .DivRightContent {
    height: 100%;
    /*background-color: #c1b5b5;*/
    width: 60%;
    float: left;
    align-items: flex-start;
    text-align: left;
    padding-left: 10px
  }

  /*图片*/
  .DivLeftImg img {
    width: 100%;
    height: auto
  }

  .DivRightContent .OrderLable a {
    color: #42b983;
    margin-left: 0.5em;
    /*background-color: #3d3a3a*/
  }

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
    overflow: scroll;
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


    .bottomItem .text {
      margin-top: -3px;
      font-size: x-small
    }

  h2 {
    color: #282721;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
</style>
