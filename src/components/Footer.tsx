import { Icons } from "./Icons"

const Footer = () => {
  return (
    <footer className="my-4">
      <div className="custom-container flex items-center justify-between px-6 py-4">
        <p className="flex items-center gap-2">Copyright @ 2023</p>

        <ul className="flex items-center gap-4 [&_a]:flex [&_a]:items-center [&_a]:gap-2">
          <li>
            <a href="/#">
              <Icons.github />
              Github
            </a>
          </li>
          <li>
            <a href="/#">
              <Icons.user />
              Ricardo Chu
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
