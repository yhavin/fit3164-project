library(readxl)
data = read_excel("decision_analysis.xlsx")
data$Won_Game = as.factor(data$Won_Game)
data$Type = as.factor(data$Type)
data$Classification = as.factor(data$Classification)

library(rpart)
set.seed(26909502)
train.row = sample(1:nrow(data), 0.8*nrow(data))
train = data[train.row, ]
test = data[-train.row, ]

tree.decisions = rpart(Classification ~ Quarter + Effectiveness + Average_Pressure, train)
tree.decisions
plot(tree.decisions)
text(tree.decisions, pretty=0)

tree.decisions$variable.importance


