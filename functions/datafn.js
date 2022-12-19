import AsyncStorage from "@react-native-async-storage/async-storage";

const getDates = (numWeeks) => {
  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let weekdays = [];
  const today = new Date();
  const todayDay = today.getDay();
  const weekArray = [...Array(7 * numWeeks).keys()].map(
    (_, i) => i - 7 * (numWeeks - 1)
  );

  weekArray.map((d, i) => {
    const newDay = new Date();
    newDay.setDate(newDay.getDate() + d - todayDay);

    const obj = {
      day: weekDay[((d % 7) + 7) % 7],
      dateFull: newDay.toLocaleDateString("en-US"),
      date: newDay.getDate(),
      today: d === todayDay ? true : false,
      index: d,
    };
    weekdays.push(obj);
    // weeks.current[i] = obj;
  });
  return weekdays;
};

const getSlideIndex = (index, oldIndex) => {
  if (index > 1 && oldIndex === 0) {
    return -1;
  } else if (index === 0 && oldIndex > 1) {
    return 1;
  } else {
    return index > oldIndex ? 1 : -1;
  }
};

const colorList = {
  green: "#288E3F",
};

const STORAGE_KEY = "@my_routine";
const saveData = async (toSave) => {
  try {
    // https://react-native-async-storage.github.io/async-storage/docs/usage/
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {}
};

export { getDates, getSlideIndex, colorList, saveData };
