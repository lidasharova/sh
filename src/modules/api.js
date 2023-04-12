//тут размещаются все функции-запросы на получение данных откуда либо

//асинхронная ф-ция для получения данных JSON
const getData = async(url)=>{
		const res = await fetch(url);
		const json = await res.json();
		return json;
}


export default getData;