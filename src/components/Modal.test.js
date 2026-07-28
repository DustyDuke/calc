import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal'
import React from "react";

import {createStore} from "redux";
import {rootReducer} from '../redux/rootReduser'
import {Provider} from "react-redux";

const store = createStore(rootReducer);

describe('Интеграция модального окна', () => {
  test('модальное окно появляется по клику на кнопку', async () => {
    render(<Provider store={store}>
              <Modal />
           </Provider>)

    // Проверяем открытие окна

   expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();

    const openButton = screen.getByText(/Добавить продукт/i);
    fireEvent.click(openButton);

    expect(screen.getByTestId('dialog')).toBeInTheDocument();

    // Проверяем закрытие окна

    const closeIcon = screen.queryByTestId('close-btn-dialog'); 
    
    fireEvent.click(closeIcon);
    await waitForElementToBeRemoved(() => screen.queryByTestId('dialog'));

    fireEvent.click(openButton);

    expect(screen.getByTestId('dialog')).toBeInTheDocument();
    
    const confirmBtn = screen.queryByTestId('confirm-btn-dialog'); 
    fireEvent.click(confirmBtn);
    await waitForElementToBeRemoved(() => screen.queryByTestId('dialog'));

  });
});
