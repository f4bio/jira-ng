import { getPanel } from "@violentmonkey/ui";
// global CSS
import globalCss from "./style.css";
// CSS modules
import styles, { stylesheet } from "./style.module.css";

function Greetings() {
  return (
    <>
      <div className={styles.title}>hello</div>
      <p className={styles.desc}>This is a panel. You can drag to move it.</p>
    </>
  );
}

// Let's create a movable panel using @violentmonkey/ui
const panel = getPanel({
  content: <Greetings />,
  theme: "dark",
  style: [globalCss, stylesheet].join("\n"),
})
panel.wrapper.style.top = "100px";
panel.setMovable(true)
panel.show()

// Let's create a movable panel using @violentmonkey/ui
const toast = VM.showToast(<div>hello</div>, {
  theme: "dark", // or 'light'
  duration: 2000, // or 0 to manually close it
})

// Manually close it
toast.close()

const disconnect = VM.observe(document.body, () => {
  // Find the target node
  const node = document.querySelector(".profile")

  if (node) {
    const h1 = document.createElement("h1")
    h1.textContent = "Profile"
    node.prepend(h1)

    // disconnect observer
    return true
  }
})

// You can also disconnect the observer explicitly when it's not used any more
disconnect()
