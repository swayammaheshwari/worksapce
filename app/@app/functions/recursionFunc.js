export async function changeCollectionId(pageId, droppedOnId) {
    // Check if the pageId exists in allPagesIdMap
    if (allPagesIdMap.hasOwnProperty(pageId)) {
      // Change the collectionId of the page
      allPagesIdMap[pageId].collectionId = droppedOnId;
  
      // Check if the page has children
      if (allPagesIdMap[pageId].hasOwnProperty("child")) {
        // Recursively change the collectionId of child pages
        allPagesIdMap[pageId].child.forEach(childId => {
          changeCollectionId(childId, droppedOnId);
        });
      }
    } else {
      console.error(`Page with ID ${pageId} does not exist in allPagesIdMap.`);
    }
  }