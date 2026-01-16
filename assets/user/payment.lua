local func = {}

function func:init(money)
    local choice = nil

    self:setTitle(Lang:toText("Confirm.pay") .. tostring(money))

    self:button1(Lang:toText("Confirm.button"), function()
        choice = true
    end)

    self:button2(Lang:toText("Cancel.button"), function()
        choice = false
    end)

    return function()
        return choice
    end
end

return func