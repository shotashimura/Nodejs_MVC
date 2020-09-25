module.exports = function (app) {
  var taskList = require("../controllers/taskController");

  app.route("/tasks").get(taskList.all_tasks).post(taskList.create_task);

  app
    .route("/tasks/:taskId")
    .get(taskList.load_task)
    .put(taskList.update_task)
    .delete(taskList.delete_task);
};

//「/tasks」ではGETリクエストを受けるとapi/controllers/taskControllerに定義されたall_tasksを実行し、
// POSTリクエストを受けるとcreate_taskを実行するように設定。
