let house = {
    livingRoom: {
      windows: 4
    },
    bedroom: {
      windows: 2
    },
    kitchen: {
      windows: 1
    }
  }
  
  function countWindows(house) {
    return house.livingRoom.windows + house.bedroom.windows + house.kitchen.windows
    
  }
  
 console.log(countWindows(house))

// const house.totalWindows = livingRoom.windows + bedroom.windows + kitchen.windows

// function countWindows(house.totalWindows)

// return countWindows(house.totalWindows)