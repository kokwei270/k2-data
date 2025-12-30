enum TransportErr {
   Process_Done = 1,
   Process_Skip_Move = 2,
   Process_Skip_Load = 3,
   Process_Skip_Unload = 4,

   // data entry
   Cannot_Find_Location_Ref = 5,
   Cannot_Find_Lorry = 6,
   Cannot_Find_Warehouse = 7,
   Cannot_Find_Distance = 8,
   Cannot_Find_Warehouse_Stock = 9,
   Move_Same_Location = 10,
   Order_Qty_Negative = 11,
   Order_Qty_Zero = 12,

   // operation
   Not_Enough_Stock_On_Lorry = 15,
   Not_Enough_Stock_At_Warehouse = 16,
   Exceed_Storage_At_Warehouse = 17,
   Exceed_Worktime_While_Driving = 18,
   Exceed_Worktime_While_Handling = 19,
   Overload_By_Num_Pallet = 20,
   Overload_By_Weight = 21,
   Lorry_Not_Home_At_Month_End = 22

}