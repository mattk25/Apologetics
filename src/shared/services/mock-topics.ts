import {Topic} from '../../app/model/topic';

export var TOPICS: Topic[] = [
  { 'id':1, 'name': 'Love' , 'image':'na', 'references': [{
        'id': 1, 'name': 'Name1', 'type': 'Reference', 'value': 'This is a reference thing that has a very very long item very very very very .' , 'tags': []},
    {
        'id': 2, 'name': 'Name2', 'type': 'Note', 'value': 'Hello', 'tags': [] },
    {
        'id': 3, 'name': 'Name3', 'type': 'Quote', 'value': 'Rnadom data 1', 'tags': [] },
    {
        'id': 4, 'name': 'Name4', 'type': 'Reference', 'value': 'Random data 2', 'tags': [] },
         {
        'id': 5, 'name': 'Name5', 'type': 'Reference', 'value': 'Rnadom data 1', 'tags': [] },
         {
        'id': 6, 'name': 'Name6', 'type': 'Reference', 'value': 'Rnadom data 1', 'tags': [] },
         {
        'id': 7, 'name': 'Name7', 'type': 'Reference', 'value': 'Rnadom data 1', 'tags': [] },
    ] },
  { 'id':2, 'name': 'Aren\'t All Saved?', 'image':'na', 'references': []},
  { 'id':3, 'name': 'Problem of Evil', 'image':'na', 'references': []},
  { 'id':4, 'name': 'Website Design', 'image':'na', 'references': []},
  { 'id':5, 'name': 'Test', 'image':'na', 'references': []}

];
