import {Topic} from '../../app/model/topic';

export var TOPICS: Topic[] = [
  { 'id':1, 'name': 'Love' , 'image':'na', 'references': [{
        'id': 1, 'name': 'Name1', 'type': 'Reference', 'value': 'This is a reference thing that has a very very long item very very very very .' , 'tags': [], 'ranking': 2},
    {
        'id': 2, 'name': 'Name2', 'type': 'Note', 'value': 'Hello', 'tags': [], 'ranking': 1},
    {
        'id': 3, 'name': 'Name3', 'type': 'Quote', 'value': 'Rnadom data 1', 'tags': [], 'ranking': 3 },
    {
        'id': 4, 'name': 'Name4', 'type': 'Reference', 'value': 'Random data 2', 'tags': [], 'ranking': 4 },
         {
        'id': 5, 'name': 'Name5', 'type': 'Reference', 'value': 'Rnadom data 1', 'tags': [], 'ranking': 5 },
         {
        'id': 6, 'name': 'Name6', 'type': 'Reference', 'value': 'Rnadom data 1', 'tags': [], 'ranking': 6 },
         {
        'id': 7, 'name': 'Name7', 'type': 'Reference', 'value': 'Rnadom data 1', 'tags': [], 'ranking': 7 },
    ] },
  { 'id':2, 'name': 'Aren\'t All Saved?', 'image':'na', 'references': []},
  { 'id':3, 'name': 'Problem of Evil', 'image':'na', 'references': []},
  { 'id':4, 'name': 'Website Design', 'image':'na', 'references': []},
  { 'id':5, 'name': 'Test', 'image':'na', 'references': []}

];
