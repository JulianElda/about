## \# Budgeting spreadsheet

[Download the spreadsheet here](/assets/Budget_2020_sample.ods).

The cells are styled according to their function:

* green-border cell indicates input field, this is where you enter your data

* underlined text indicates the value of the cell is from another sheet

* unstyled text indicates an automatically calculated value

* red text indicates negative value

## \# Starting a budget

Head to **Main View** sheet, and enter your income on the top left of corresponding month, then allocate the month's income to categories.

Now head to the month's transaction sheet, named **T-{month_number}**, and enter your transactions. As you fill the transactions, the **Main View** will automatically calculate the total amount of spending of each categories.

## \# Categories

The categories are fixed in **Data** sheet, you can modify them as you like. You have to manually adjust the **Main View** however.

The categories are divided into two groups: *Budgetable* and *Pay Firsts*. *Budgetable* is your normal category for spending. *Pay Firsts*, however is a little different.

## \# Pay Firsts

I used to save every month based on how much money I have left at the end of the month.

```
budget = income
```

However, when there is money available to spend, inevitably I end up spending it, and left little for savings at the end of the month.

```
saving = budget - total_spending
```

Therefore I created a new *Pay first* category. The "budget of the month" is first deducted from *Pay first* spendings.

```
budget = income - pay_first
```

This ensures that there is always an amount being saved every month, while also limiting the budget from using every single cent for spending and leaves nothing for saving.

```
saving = pay_first
```

In the spreadsheet, I categorize *Rent*, *Saving*, *Investment*, and *Rainy-day* as *Pay first*. You can modify them as you like in the **Data** sheet

## \# Rainy-day budget

One problem with budgeting based on month is handling big, irregular spending, for example, tuition fees (every semester), transport ticket (every year), or unexpected fees like repairs, administrative fees, fines, etc. When there is a single transaction with big amount in the month, the balance of that month now swings heavily towards negative, and I spent the rest of the year "re-balancing" these irregular spendings.

For this problem I made a separate calculation for handling irregular spendings. The idea is you allocate some money each month to an irregular-spendings budget, called *Rainy-day budget*. The irregular spendings is then entered into the **Rainy-day** sheet. This way, it won't interfere with the month budgeting.

## \# Saving goals

Saving money is a great idea. You should save some money every month.

However, saving money without any idea what to spend it for, is not a great idea. You will be tempted to use that money on something else, probably unplanned, probably impulsive, probably a bad idea. Therefore every saving must have a goal. 

If you don't have a goal for the money you've already saved, then turn it into *emergency purposes* saving. And this month, give a goal for the month's saving.

Head to **Saving goals** sheet. Enter the purpose of the saving and its target amount. Additionally you can enter a starting amount. The rest of the table are automatically calculated from each month's transaction sheet.

Now head to the month's transaction sheet, and enter a transaction with category *Saving*. In the description field, enter **Saving: {goal_name}** (with space), *e.g.* **Saving: Vacation**.