import { MapIndex } from '../models/mapModel';

export function findPathInMapIndex(
	mapIndex: MapIndex,
	key: string
): string[] | undefined {
	const indexItem = mapIndex.index.find((item) => item.key === key);
	return indexItem ? indexItem.path : undefined;
}
