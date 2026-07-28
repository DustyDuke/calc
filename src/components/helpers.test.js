import {currentWeightCount} from "./helpers";

describe('Тестирование функции currentWeightCount', () => {
  test('Корректный расчет с округлением до двух знаков', () => {
    const prop = 'fats';
    const elements = { fats: 50, weight: 250 };
    expect(currentWeightCount(prop, elements)).toBe('125.00');
  });

  test('Расчет с дробным результатом', () => {
    const prop = 'fats';
    const elements = { fats: 33, weight: 15 }; 
    expect(currentWeightCount(prop, elements)).toBe('4.95');
  });

  test('Округление до двух знаков при периодической дроби', () => {
    const prop = 'fats';
    const elements = { fats: 10, weight: 33.33 }; 
    expect(currentWeightCount(prop, elements)).toBe('3.33');
  });

  test('Возвращает NaN, если свойства отсутствуют', () => {
    const prop = 'fats';
    const elements = { carbs: 50 }; 
    expect(currentWeightCount(prop, elements)).toBe('NaN');
  });
});
