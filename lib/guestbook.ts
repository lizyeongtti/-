// This is a client-side simulation of server persistence
// In a real app, you would use a database or API

// Use localStorage to persist guestbook entries
export async function saveGuestbookEntry(entry: string): Promise<void> {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      try {
        const entries = getEntriesFromStorage()
        entries.push(entry)
        localStorage.setItem("guestbookEntries", JSON.stringify(entries))
        resolve()
      } catch (error) {
        console.error("Error saving entry:", error)
        resolve()
      }
    }, 500)
  })
}

export async function getGuestbookEntries(): Promise<string[]> {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      try {
        const entries = getEntriesFromStorage()
        resolve(entries)
      } catch (error) {
        console.error("Error getting entries:", error)
        resolve([])
      }
    }, 300)
  })
}

function getEntriesFromStorage(): string[] {
  if (typeof window === "undefined") {
    return []
  }

  const storedEntries = localStorage.getItem("guestbookEntries")
  return storedEntries ? JSON.parse(storedEntries) : []
}
