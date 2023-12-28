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
				<div class="btn" @click="submit">{{$t('connection.connection17')}}</div>
			</div>
		</div>

		<div class="mask" v-if="isMask">
			<div class="mask-cont"></div>
			<div class="mask-text">
				<div class="mask-div">信息已提交</div>
				<div class="mask-but" @click="submit">确定</div>
				<!-- <div class="mask-icon"></div> -->
			</div>
		</div>
	</div>

</template>

<script>
	export default {

		data() {
			return {
				type:0,
				isMask:false
			};
		},

		created() {

		},
		mounted() {
			
		},
		methods:{
			typeCheck(i){
				this.type = i
			},
			submit(){
				this.isMask = !this.isMask
			}
		}

	};
</script>

<style lang="scss" scoped>
	.connection {
		background: #fff;
		padding: 12px 15px 28px 15px;
		margin: auto;
		.mask{
			.mask-cont{
				position:fixed;
				background:#000;
				width: 100%;
				height: 100%;
				opacity: 0.5;
				top: 0;
				left: 0;
			}
			.mask-text{
				width: 200px;
				height: 120px;
				background:#fff;
				position:fixed;
				left: 50%;
				top:50%;
				margin:-60px 0 0 -100px;
				text-align:center;
				border-radius:5px;
				.mask-but{
					background: #066EB7;
					border: 1px solid rgba(216,216,216,1);
					border-radius: 5px;
					width: 126px;
					height: 34px;
					text-align: center;
					line-height:34px;
					color:#fff;
					cursor: pointer;
					margin:0 auto;
				}
				.mask-div{
					padding:20px 0;
				}
				.mask-icon{
					position:absolute;
					background: url('@/assets/image/close.png') no-repeat;
					background-size:100%;
					width: 32px;
					height: 32px;
					right:0;
					top:0;
				}
			}
		}
		.form{
			.form-input{
				display:flex;
				flex-wrap:wrap;
				margin-top:30px;
				div{
					width: 490px;
					margin-bottom:10px;
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
						width: 330px;
						padding-left:10px;
						height: 40px;
						line-height:40px;
					}
				}
				
			}
			.form-type{
				display:flex;
				flex-wrap:wrap;
				.label{
					display: block;
					line-height:36px;
					width: 490px;
				}
				.type-name{
					display:flex;
					flex-wrap:wrap;
					margin-top:13px;
					label{
						display: block;
						line-height:24px;
					}
					span{
						display: block;
						background: url('@/assets/image/type.png') no-repeat;
						background-size:100%;
						width: 24px;
						height: 24px;
						margin:0 32px 0 12px;
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
				p{
					line-height:30px;
					font-size:12px;
				}
			}
			.btn-box{
				padding:0 0 50px 0;
				display:flex;
				justify-content: flex-end; 
				.btn{
					background: #066EB7;
					border: 1px solid rgba(216,216,216,1);
					border-radius: 5px;
					width: 330px;
					height: 40px;
					text-align: center;
					line-height:40px;
					color:#fff;
				}
			}
			
		}
		.title {
			margin: auto;
			padding-top: 12px;
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
			margin: auto;
			font-size: 16px;
			color: #000000;
			line-height: 30px;
			font-weight: 400;
			div {
				margin-top: 20px;

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
