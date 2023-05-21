"use client";

import Home from "@/app/page";
import React from "react";
import { useState, useEffect } from "react";

const Task = ({ title, description, deleteTask, index }) => {
	if (!title || !description) {
		return null;
	}


	return (
		<div className="flex flex-col py-3 m-4 items-center text-gray-500">
			<p>{title}</p>
			<span>{description}</span>
			<button
				className="mt-6 py-3 bg-black text-white w-[150px] hover:bg-white hover:text-black border border-black"
				onClick={() => deleteTask(index)}
			>
				Delete Task
			</button>
		</div>
	);
};


const Main = () => {
	const initialArray = localStorage.getItem("tasks")
		? JSON.parse(localStorage.getItem("tasks"))
		: [];

	const [tasks, setTasks] = useState(initialArray);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		setTasks([...tasks, { title, description }]);
		setTitle("");
		setDescription("");
	};

	const deleteTask = (index) => {
		const filteredArr = tasks.filter((val, i) => {
			return i !== index;
		});
		setTasks(filteredArr);
	};

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	return (
		<div className="bg-gray-100 m-auto w-[70%]">
			<section>
				<form
					onSubmit={submitHandler}
					className="items-center flex flex-col mt-6"
				>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						placeholder="Task Title"
						className="border outline-none flex flex-col mt-6 py-2 md:w-[500px]"
					/>
					<input
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						type="text"
						placeholder="Task Description"
						className="border outline-none flex flex-col mt-6 py-2 md:w-[500px]"
					/>
					<button
						type="submit"
						className="mt-6 py-3 bg-black text-white w-[150px] md:w-[150px] hover:bg-white hover:text-black border border-black"
					>
						Add
					</button>
				</form>
				{tasks.map((item, index) => (
					<Task
						key={index}
						title={item.title}
						description={item.description}
						deleteTask={deleteTask}
						index={index}
					/>
				))}
			</section>
		</div>
	);
};

export default Main;
