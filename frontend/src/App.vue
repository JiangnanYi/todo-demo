<template>
	<div id="app">
		<h1>任务列表</h1>
		<div>
		<button><router-link to="/insert" >添加</router-link></button>
			<router-view></router-view>
		</div>
<br>
		<table>
			<tr>
				<td>编号</td>
				<td>姓名</td>
				<td>任务</td>
				<td>开始日期</td>
				<td>结束日期</td>
				<td>完成情况</td>
				<td>备注</td>
				<td>操作</td>
			</tr>
			<tr v-for="todo in todos">
				<td>{{todo.id}}</td>
				<td>{{todo.name}}</td>
				<td>{{todo.detail}}</td>
				<td>{{todo.createdAt}}</td>
				<td>{{todo.finishedAt}}</td>
				<td>{{todo.state}}</td>
				<td>{{todo.memo}}</td>
				<td><button @click="del" :data-id="todo.id">删除</button><button><router-link to="/upt" >修改</router-link></button></td>
			</tr>
		</table>
	</div>
</template>



<script>
	export default {
		name: 'app',
		data() {
			return {
				todos: [],
				todo: {
					name: '',
					detail: '',
					createdAt: '',
					finishedAt: '',
					state: '',
					memo: ''
				}
			}
		},
		methods: {
			submit() {
				console.log(this.todo);
				fetch('http://localhost:8080/todo', {
						method: 'post',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(this.todo)
					}).then(resp => resp.json(), location.reload())
					.then(data => {
						this.todos = data;

					});
			},
			del(e) {
				var id = e.currentTarget.dataset.id;
				fetch('http://localhost:8080/todo/del/' + id, {
						method: 'get',
					})
					.then(resp => resp.json(), location.reload())
					.then(data => {
						this.todos = data;

					});
			},
			upt(e) {
				var id = e.currentTarget.dataset.id;
				this.$router.push('/upt');
			}
		},
		created() {
			fetch('http://localhost:8080/todo', null)
				.then(resp => resp.json())
				.then(data => {
					this.todos = data
				});
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
