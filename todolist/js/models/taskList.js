export class TaskList {
  arr = [];
  pushTask(task) {
    task.id = this.generateTaskId();
    this.arr = [...this.arr, task];
  }
  popTask(id) {
    this.arr = this.arr.filter((ele) => ele.id !== id);
  }
  sortTask(isA2Z) {
    let sortResult = [...this.arr];
    for (let i = 0; i < sortResult.length; i++) {
      for (let j = i + 1; j < sortResult.length; j++) {
        if (isA2Z) {
          if (sortResult[i].name > sortResult[j].name) {
            const temp = sortResult[i];
            sortResult[i] = sortResult[j];
            sortResult[j] = temp;
          }
        } else {
          if (sortResult[i].name < sortResult[j].name) {
            const temp = sortResult[i];
            sortResult[i] = sortResult[j];
            sortResult[j] = temp;
          }
        }
      }
    }
    console.log({sortResult});
    return sortResult;
  }
  generateTaskId() {
    let maxId = 0;
    this.arr.forEach((ele) => {
      maxId = ele.id * 1 > maxId ? ele.id * 1 : maxId;
    });
    return String(maxId + 1);
  }
  getTaskById(id) {
    return this.arr.filter((ele) => ele.id === id);
  }
}
