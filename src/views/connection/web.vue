<template>
	<div class="connection">
		<div class="title">
			<span></span>
			{{$t('connection.connection1')}}{{$t('connection.connection2')}} <div class="txt"></div>
		</div>
		<div class="content">
			<div>
				<p>{{$t('connection.connection3')}}</p>
				
			</div>

			<div>
				<p>{{$t('connection.connection6')}}: (852) 2543 8033</p>
				<p>{{$t('connection.connection5')}}: enquiry.ipoint@outlook.com</p>
			</div>
			<div><p>{{$t('connection.connection4')}}</p></div>
		</div>
		<div class="form">
			<div class="form-input">
				<div>
					<label>{{$t('connection.connection7')}}</label>
					<input type="text" >
				</div>
				<div>
					<label>{{$t('connection.connection8')}}</label>
					<input type="text" >
				</div>
				<div>
					<label>{{$t('connection.connection9')}}</label>
					<input type="text" >
				</div>
				<div>
					<label>{{$t('connection.connection10')}}</label>
					<input type="text" >
				</div>
				<div>
					<label>{{$t('connection.connection11')}}</label>
					<input type="text" >
				</div>
			</div>
			<div class="form-type">
				<label class="label">{{$t('connection.connection12')}}</label>
				<div class="type-name">
					<label>{{$t('connection.connection13')}}</label>
					<span :class="{'check':type == 0}" @click="typeCheck(0)"></span>
					<label>{{$t('connection.connection14')}}</label>
					<span :class="{'check':type == 1}" @click="typeCheck(1)"></span>
				</div>
			</div>
			<div class="upload">
				<p>{{$t('connection.connection15')}}</p>
				<div class="custom-file-upload">
					<input type="file" id="file-input" class="input-file">
					<label for="file-input"><i class="fa fa-cloud-upload"></i>{{$t('connection.connection16')}}</label>
					<span id="file-name"></span>
				</div>
			</div>
			<div class="btn-box">
				<div class="btn">{{$t('connection.connection17')}}</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {

		data() {
			return {
				type:0,
			};
		},

		created() {

		},
		mounted() {
			
		},
		methods:{
			typeCheck(i){
				this.type = i
			}
		}

	};
</script>

<style lang="scss" scoped>
	.connection {
		background: #fff;
		margin: auto;
		.form{
			width: 1000px;
			margin:auto;
			.form-input{
				display:flex;
				flex-wrap:wrap;
				margin-top:50px;
				div{
					width: 490px;
					margin-bottom:26px;
					label{
						display: inline-block;
						width: 100px;
						line-height:40px;
					}
					input{
						display: inline-block;
						background: #F0F0F0;
						border: 1px solid rgba(238,240,248,1);
						border-radius: 5px;
						width: 370px;
						padding-left:10px;
						margin-left:5px;
						height: 40px;
						line-height:40px;
					}
				}
				div:nth-child(2n){
					margin-left:40px;
					width: 460px;
					label{
						width: 70px;
					}
				}
				
			}
			.form-type{
				margin-top:40px;
				display:flex;
				flex-wrap:wrap;
				.label{
					display: block;
					line-height:36px;
				}
				.type-name{
					display:flex;
					flex-wrap:wrap;
					margin-left:40px;
					label{
						display: block;
						line-height:36px;
					}
					span{
						display: block;
						background: url('@/assets/image/type.png') no-repeat;
						background-size:100%;
						width: 36px;
						height: 36px;
						margin:0 50px 0 20px;
						cursor: pointer;
					}
					.check{
						background: url('@/assets/image/type-check.png') no-repeat;
						background-size:100%;
					}
				}
			}
			.upload{
				margin-top:28px;
				display:flex;
				flex-wrap:wrap;
				padding-bottom:40px;
				border-bottom:1px solid rgba(202,202,202,1);
				p{
					line-height:30px;
				}
			}
			.btn-box{
				padding:40px 0 100px 0;
				display:flex;
				justify-content: flex-end; 
				.btn{
					background: #066EB7;
					border: 1px solid rgba(216,216,216,1);
					border-radius: 5px;
					width: 176px;
					height: 44px;
					text-align: center;
					line-height:44px;
					color:#fff;
				}
			}
			
		}
		.title {
			width: 1000px;
			margin: auto;
			padding-top: 43px;
			display: flex;
			align-items: center;
			font-size: 34px;
			font-weight: 600;
			line-height: 48px;
			color: #525252;

			span {
				width: 11px;
				height: 34px;
				display: block;
				margin-right: 9px;
				background: #bebebe;
			}

			.txt {
				font-weight: 200;
			}
		}

		.content {
			width: 1000px;
			margin: auto;
			font-size: 16px;
			color: #000000;
			line-height: 30px;
			font-weight: 400;
			div {
				margin-top: 34px;

				&:last-child {
					font-size: 18px;
					color: #000000;
					font-weight: 500;
				}
			}
		}
		/* 隐藏默认的文件选择按钮 */
		.input-file {
      display: none;
    }

    /* 定义自定义样式的文件上传容器 */
    .custom-file-upload {
      position: relative;
      display: inline-block;
      overflow: hidden;
      border-radius: 4px;
      cursor: pointer;
    }

    /* 自定义样式的按钮 */
    .custom-file-upload label {
      display: inline-block;
      background-color: #066EB7;
      color: white;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
    }

    /* 可选：添加鼠标悬停和按下效果 */
    .custom-file-upload label:hover,
    .custom-file-upload label:active {
      background-color: #2980b9;
    }

    /* 显示选中的文件名 */
    #file-name {
      display: inline-block;
      margin-left: 10px;
    }
	}
</style>
