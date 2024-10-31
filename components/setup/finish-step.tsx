import { FC } from "react"

interface FinishStepProps {
  displayName: string
}

export const FinishStep: FC<FinishStepProps> = ({ displayName }) => {
  return (
    <div className="space-y-4">
      <div>
        Bienvenue dans l&apos;interface utilisateur de l&apos;Assistant ASHIA
        {displayName.length > 0 ? `, ${displayName.split(" ")[0]}` : null}!
      </div>

      <div>Cliquez sur Suivant pour commencer à discuter.</div>
    </div>
  )
}
