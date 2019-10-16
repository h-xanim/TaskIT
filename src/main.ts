import './app-thirdparty';
import './app.less';
import Task from './Task';
/*Функция которая проверяет поле ввода, и запускает соответствующею функции если все ок*/

$(() => {

    let itemsContainer = $('#items-container');

    let addButton = $('#add');

    let itemInput = $('#item-input');

    addButton.click(_ => {

        let text: string = itemInput.val() as string;

        let task = new Task(text, new Date());
        task.addMe(itemsContainer);

    });
});
