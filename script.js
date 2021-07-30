const taskContainer = document.querySelector(".task__container");
console.log(taskContainer);

const saveChanges = () => {
	const taskData = {
		id: `${Date.now()}`,
		imageUrl: document.getElementById("imageurl").value,
		taskTitle: document.getElementById("tasktitle").value,
		taskType: document.getElementById("tasktype").value,
		taskDescription: document.getElementById("taskdescription").value
	};
	const newCard = `
	<div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
		<div class="card border-primary h-100">
			<div class="card-header d-flex justify-content-end gap-2 border-primary">
				<button type="button" class="btn btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
				<button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
			</div>
			<div class="card-body">
				<img src=${taskData.imageUrl} class="card-img-top rounded mb-2" alt="random 300x200 image">
				<h5 class="card-title text-primary fw-bold">${taskData.taskTitle}</h5>
				<p class="card-text">${taskData.taskDescription}</p>
				<a href="#" class="btn btn-primary">${taskData.taskType}</a>
			</div>
		</div>
	</div>
	`;

	taskContainer.insertAdjacentHTML("beforeend", newCard);
};
