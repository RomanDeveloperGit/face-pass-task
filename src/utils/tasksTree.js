import { maxNestingLevelTree, TASK_NO_PARENT_ID } from './utils';

const tasksTree = {
	sort(tree) {
		// сначала сортируем по дате создания, чтобы элемент вставал в свою начальную позицию после снятия галочки.
		// + если нажали по родительскому элементу, то все дочерние элементы должны автоматически стать выполненными, а значит, последние две...
		// ...сортировки их не поменяют, необходимо, чтобы они остались в порядке создания.
		// потом сортируем по статусу выполнено/не выполнено.
		// потом сортируем по дате выполнения.

		tree.sort((a, b) => b.createdAt - a.createdAt);
		tree.sort((a, b) => a.isCompleted - b.isCompleted);
		tree.sort((a, b) => a.completedAt - b.completedAt);
	
		return tree;
	},
	getTasksArray(tree, tasksArray = [], currentNestingLevel = 1) {
		tree.forEach(node => {
			if (currentNestingLevel + 1 > maxNestingLevelTree) return;

			tasksArray.push({
				id: node.id,
				text: node.text
			});

			if (node.children) this.getTasksArray(node.children, tasksArray, currentNestingLevel + 1);
		});

		return tasksArray;
	},
	add(tree, parentTaskId, task, currentNestingLevel = 1) {
		if (parentTaskId === TASK_NO_PARENT_ID) {
			tree.push(task);
		}
		else {
			tree.forEach(node => {
				if (node.id === parentTaskId) {
					if (currentNestingLevel + 1 > maxNestingLevelTree) return;
	
					if (!node.children) node.children = [];
					node.children.push(task);
				}
				else if (node.children) {
					this.add(node.children, parentTaskId, task, currentNestingLevel + 1);
				}
			});
		}

		return tree;
	},
	setCompleteStatus(tree, taskId, isCompleted) {
		tree.forEach(node => {
			if (node.id === taskId) {
				node.isCompleted = isCompleted;

				if (node.isCompleted) node.completedAt = new Date().getTime();
				else delete node.completedAt;
			}
			else if (node.children) {
				this.setCompleteStatus(node.children, taskId, isCompleted);
			}
		});

		return tree;
	},
	remove(tree, taskId) {
		tree.forEach((node, index) => {
			if (node.id === taskId) tree.splice(index, 1);
			else if (node.children) this.remove(node.children, taskId);
		});

		return tree;
	}
};

export default tasksTree;