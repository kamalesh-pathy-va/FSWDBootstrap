const taskContainer = document.querySelector(".task__container");
const globalStore = [];
console.log(taskContainer);

const generateNewCard = (taskData) => {
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
	return newCard;
}

const loadInitialCardData = () => {
	const getCardData = localStorage.getItem("taskyKam2610");
	const {cards} = JSON.parse(getCardData);
	console.log(cards);
	cards.map((cardObject) => {
		// console.log(cardObject);
		taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
		globalStore.push(cardObject);
	});
}

const saveChanges = () => {
	const taskData = {
		id: `${Date.now()}`,
		imageUrl: document.getElementById("imageurl").value,
		taskTitle: document.getElementById("tasktitle").value,
		taskType: document.getElementById("tasktype").value,
		taskDescription: document.getElementById("taskdescription").value
	};


	taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
	globalStore.push(taskData);
	localStorage.setItem("taskyKam2610", JSON.stringify({cards:globalStore}));
};
