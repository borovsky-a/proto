import { useEffect, useReducer } from "react";
import _ from 'lodash';

export type SortTableDirection = 'ascending' | 'descending' | undefined;
export const CHANGE_SORT = 'CHANGE_SORT';
export const CHANGE_DATA = 'CHANGE_DATA';
type SortTableArgs = {
   column: string | null,
   data: any[],
   direction: SortTableDirection,
}
const sortableReducer = (state: any, action: any) => {
   switch (action.type) {
      case CHANGE_SORT:
         if (state.column === action.column) {
            return {
               ...state,
               data: state.data.slice().reverse(),
               direction:
                  state.direction === 'ascending' ? 'descending' : 'ascending',
            }
         }
         return {
            column: action.column,
            data: _.sortBy(state.data, [action.column]),
            direction: 'ascending',
         }
      case CHANGE_DATA:
         {
            if(!state.column){
               return { ...state, data: state.data };
            }
            const asc = state.direction === 'ascending' || !state.direction;
            const data =  asc ?  _.sortBy(action.data, [state.column]) : _.orderBy(action.data, state.column, 'desc');
            return { ...state, data: data };
         }
      default:
         throw new Error()
   }
}

export function useSortTable<T>(items: any[]) {

   const initState: SortTableArgs = {
      column: null,
      data: items,
      direction: undefined
   }
   const [state, dispatch] = useReducer(sortableReducer, initState);

   const onSort = (column: string): SortTableDirection => {
      return state.column === column ? state.direction : undefined;
   }

   const onClick = (column: string) => {
      return () => dispatch({ type: CHANGE_SORT, column: column })
   }

   useEffect(() => {
      dispatch({ type: CHANGE_DATA, data: items });
   }, [items]);

   return {
      column: state.column,
      data: state.data as T[],
      direction: state.direction,
      onSort,
      onClick
   }
}