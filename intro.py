def getH(orgArr):
  orgArr.sort(reverse=True)
  
  for i in range(len(orgArr)):
    valueAt = orgArr[i]

    adjustedAt = valueAt - 1

    seen = adjustedAt - i
    endIndex = i + seen
    
    if(orgArr[endIndex] >= valueAt):
      print('H-index value found and it is %d' %valueAt)
      break

start = [1, 4, 1, 4, 2, 1, 3, 5, 6]    

getH(start)
