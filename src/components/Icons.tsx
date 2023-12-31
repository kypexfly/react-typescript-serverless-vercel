import { ChevronLeft, ChevronRight, Github, User, type LucideIcon, type LucideProps, Loader2 } from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  github: Github,
  user: User,
  prev: ChevronLeft,
  next: ChevronRight,
  loader: Loader2,
  logo: (props: LucideProps) => (
    <svg viewBox="0 0 508 508" width={24} height={24} {...props}>
      <circle style={{ fill: "#84DBFF" }} cx={254} cy={254} r={254} />
      <path
        style={{ fill: "#FFFFFF" }}
        d="M121.6,103.6v301.2c0,6.8,5.6,12.4,12.4,12.4h183.6v-56c0-6.8,5.6-12.4,12.4-12.4h56V103.6
	c0-6.8-5.6-12.4-12.4-12.4H134C127.2,90.8,121.6,96.4,121.6,103.6z"
      />
      <path
        style={{ fill: "#E6E9EE" }}
        d="M317.6,417.2l68.8-68.8h-56c-6.8,0-12.4,5.6-12.4,12.4v56.4H317.6z"
      />
      <rect
        x={152}
        y={132}
        style={{ fill: "#FFD05B" }}
        width="37.2"
        height="37.2"
      />
      <rect
        x={152}
        y="195.2"
        style={{ fill: "#FF7058" }}
        width="37.2"
        height="37.2"
      />
      <rect
        x={152}
        y="258.4"
        style={{ fill: "#4CDBC4" }}
        width="37.2"
        height="37.2"
      />
      <g>
        <rect
          x={206}
          y={132}
          style={{ fill: "#E6E9EE" }}
          width={150}
          height="10.4"
        />
        <rect
          x={206}
          y="158.8"
          style={{ fill: "#E6E9EE" }}
          width="94.4"
          height="10.4"
        />
        <rect
          x={206}
          y="195.2"
          style={{ fill: "#E6E9EE" }}
          width={150}
          height="10.4"
        />
        <rect
          x={206}
          y={222}
          style={{ fill: "#E6E9EE" }}
          width="94.4"
          height="10.4"
        />
        <rect
          x={206}
          y="258.4"
          style={{ fill: "#E6E9EE" }}
          width={150}
          height="10.4"
        />
        <rect
          x={206}
          y="285.2"
          style={{ fill: "#E6E9EE" }}
          width="94.4"
          height="10.4"
        />
      </g>
    </svg>
  ),
}
