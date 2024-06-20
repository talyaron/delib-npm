import { Statement, StatementType } from "../models/statementsModels";
import { Role, User } from "../models/usersModels";

export function maxKeyInObject(obj: { [key: string]: number }): string {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

export function getStatementSubscriptionId(
    statementId: string,
    user: User,
): string | undefined {
    try {
        if (!user || !user.uid) throw new Error("No user");
        if (!statementId) throw new Error("No statementId");

        return `${user.uid}--${statementId}`;
    } catch (error) {
        console.error(error);

        return undefined;
    }
}

/** enter statement to see if it is an option */
export function isOptionFn(statement: Statement): boolean {
    try {
        return (
            statement.statementType === StatementType.option ||
            statement.statementType === StatementType.result
        );
    } catch (error) {
        console.error(error);

        return false;
    }
}

export function isMember(role:Role|undefined):boolean{
    if(role === Role.admin || role === Role.member || role === Role.creator) return true;
    return false;
}

export function updateArray<T>(
	currentArray: Array<T>,
	newItem: T,
	updateByProperty: keyof T & string,
): Array<T> {
	try {
		const arrayTemp = [...currentArray];

		if (!newItem[updateByProperty]) {
			throw new Error(`Item doesn't have property ${updateByProperty}`);
		}

		//find in array;
		const index = arrayTemp.findIndex(
			(item) => item[updateByProperty] === newItem[updateByProperty],
		);
		if (index === -1) arrayTemp.push(newItem);
		else {
			const oldItem = JSON.stringify(arrayTemp[index]);
			const newItemString = JSON.stringify({
				...arrayTemp[index],
				...newItem,
			});
			if (oldItem !== newItemString)
				arrayTemp[index] = { ...arrayTemp[index], ...newItem };
		}

		return arrayTemp;
	} catch (error) {
		console.error(error);

		return currentArray;
	}
}