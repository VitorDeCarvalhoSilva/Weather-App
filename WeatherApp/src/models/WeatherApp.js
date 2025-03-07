class WeatherApp {


    //Função responsável por retornar a data e hora atual
    getDateTime() {
        const [dateTime, setDateTime] = useState(new Date());
        useEffect(() => {
            const interval = setInterval(() => {
                setDateTime(new Date());
            }, 1000);
            return () => clearInterval(interval);
        }, []);

        const dayOfWeek = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
        const dayOfMonth = dateTime.getDate();
        const month = dateTime.toLocaleDateString('en-US', { month: 'long' });
        const time = dateTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
         });

        const formatedDateTime = `${dayOfWeek}, ${dayOfMonth} ${month} ${time}`;
        return formatedDateTime;
    }
}

export default WeatherApp;