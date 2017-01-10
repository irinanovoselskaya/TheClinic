import {combineReducers} from 'redux';

import patients from './patients';
import rooms from './rooms';
import viewModel from './view-model';

export const initialState = {
    patients: [
        {id: 1, name:'James Smith', dataOfBirthday: '11 Jun 1935', dayOfEntry: '01 Feb 1957', roomId: '11', role: 'Cleopatra'},
        {id: 2, name:'John Johnson', dataOfBirthday: '02 Jan 1920', dayOfEntry: '12 May 1962', roomId: '12', role: 'Reptilians'},
        {id: 3, name:'Robert Williams', dataOfBirthday: '11 Dec 1938', dayOfEntry: '07 Oct 2000', roomId: '13', role: 'Unicorn'},
        {id: 4, name:'Michael Jones', dataOfBirthday: '22 Mar 1950', dayOfEntry: '12 Dec 1976', roomId: '14', role: ''},
        {id: 5, name:'William Brown', dataOfBirthday: '05 Apr 1970', dayOfEntry: '31 Jan 1999', roomId: '11', role: 'Napoleon'},
        {id: 6, name:'David Miller', dataOfBirthday: '26 Nov 1991', dayOfEntry: '09 Jul 2010', roomId: '12', role: 'Martian'},
        {id: 7, name:'Richard Davis', dataOfBirthday: '10 Sep 1974', dayOfEntry: '04 Aug 1989', roomId: '13', role: 'Elf'},
        {id: 8, name:'Charles Wilson', dataOfBirthday: '1 May 1989', dayOfEntry: '14 Sep 1993', roomId: '14', role: ''},
        {id: 9, name:'Joseph Moore', dataOfBirthday: '09 Feb 1992', dayOfEntry: '12 Feb 2009', roomId: '11', role: 'Tesla'},
        {id: 10, name:'Thomas Taylor', dataOfBirthday: '11 Oct 1984', dayOfEntry: '26 Nov 2011', roomId: '14', role: ''}
        ],
    rooms: [
        {id: 11, title: "Famous people"},
        {id: 12, title: "Aliens"},
        {id: 13, title: "Fairytale creation"},
        {id: 14, title: "Malingerers"},
    ],
    viewModel: {currentRoom: 0, sortValue: 'name'}
};

export const reducer = combineReducers ({
    patients,
    rooms,
    viewModel
});
