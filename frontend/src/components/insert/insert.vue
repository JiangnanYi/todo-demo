<template>
	<div id="insert" style="align-content: center; border: 1px solid red; width: 500px;margin:auto;">
		<p><span>姓名：</span><input v-model="todo.name" placeholder="name"></input><span>&nbsp;&nbsp;任务：</span><input v-model="todo.detail" placeholder="detail"></input></p>
		
		<p><span>开始时间：</span><input v-model="todo.createdAt" type="date" placeholder="createdAt"></input><span>结束时间：</span><input v-model="todo.finishedAt" type="date" placeholder="finishedAt"></input></p>

		<p><span>完成情况：</span><input v-model="todo.state" placeholder="state" /><span>备注：</span><input v-model="todo.memo" placeholder="memo" /></p>
		
		<button @click="submit">提交</button>
	</div>
</template>

<script>
	export default {
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
			};
		},
		methods: {
			submit() {
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
			}
		}
	}
</script>

<style>

</style>
