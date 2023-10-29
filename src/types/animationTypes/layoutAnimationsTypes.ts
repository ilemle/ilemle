import { BaseAnimationBuilder, EntryExitAnimationFunction } from "react-native-reanimated";
import { ReanimatedKeyframe } from "react-native-reanimated/lib/typescript/reanimated2/layoutReanimation/animationBuilder/Keyframe";

type layoutAnimationType =
    typeof BaseAnimationBuilder |
    EntryExitAnimationFunction |
    BaseAnimationBuilder |
    ReanimatedKeyframe |
    undefined

export type enteringType = layoutAnimationType

export type exitingType = layoutAnimationType

